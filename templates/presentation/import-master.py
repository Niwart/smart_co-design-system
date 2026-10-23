"""Turn a designer's SmartCo deck (.pptx) into the clean PowerPoint master SmartCo-Deck.potx.

Keeps:   the slide master, all slide layouts, the notes master, themes, and the media they use.
Removes: all slides and their notes / media, SharePoint metadata (customXml, custom.xml), Office add-ins
         (webextensions), revision info, the thumbnail.
Fixes:   colour codes -> 00-core.md values (where a colour is used is not changed);
         theme font family -> Roboto (headings and body), Calibri -> Roboto;
         body-font bold -> Roboto SemiBold 600; followed hyperlink -> primary;
         the notes-master theme gets the same SmartCo colours and fonts.
Embeds:  Roboto Regular / Bold / Italic / Bold Italic and Roboto SemiBold / SemiBold Italic from fonts/
         (Embedded OpenType .fntdata parts), so decks open in Roboto where the font is not installed.

Usage: python3 import-master.py "<source>.pptx" [SmartCo-Deck.potx]
Stdlib only.
"""
import posixpath, re, sys, zipfile

# Near-miss codes found in the source -> core tokens (00-core.md §3)
COLOR_FIX = {"0064FB": "0065FC",  # primary
             "43E6A1": "43E6A2",  # secondary
             "E6D343": "E6D443"}  # accent-2
FONT = "Roboto"
TEMPLATE_CT = "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml"
PRESENTATION_CT = "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"


def rels_path(part):
    d, b = posixpath.split(part)
    return f"{d}/_rels/{b}.rels"


def targets(src, part):
    """Internal targets of a part's relationships, resolved to package paths."""
    rp = rels_path(part)
    if rp not in src:
        return []
    d = posixpath.dirname(part)
    out = []
    for m in re.finditer(r"<Relationship\b[^>]*>", src[rp].decode("utf8")):
        el = m.group(0)
        if 'TargetMode="External"' in el:
            continue
        t = re.search(r'Target="([^"]+)"', el).group(1)
        out.append(posixpath.normpath(t.lstrip("/") if t.startswith("/") else posixpath.join(d, t)))
    return out


def fix_colors(s):
    for old, new in COLOR_FIX.items():
        s = re.sub(old, new, s, flags=re.I)
    return s


def fix_theme_fonts(xml):
    def latin(block):
        return re.sub(r'<a:latin typeface="[^"]*"(?: panose="[^"]*")?/>', f'<a:latin typeface="{FONT}"/>', block, count=1)
    xml = re.sub(r"<a:majorFont>.*?</a:majorFont>", lambda m: latin(m.group(0)), xml, flags=re.S)
    xml = re.sub(r"<a:minorFont>.*?</a:minorFont>", lambda m: latin(m.group(0)), xml, flags=re.S)
    return xml


SEMIBOLD = "Roboto SemiBold"  # name ID 1 of Roboto-SemiBold.ttf: Office addresses non-RIBBI weights as their own family
RPR_AFTER_LATIN = r"<a:(?:ea|cs|sym|hlinkClick|hlinkMouseOver|rtl|extLst)\b"


def semibold(sp):
    """Within one shape: bold body-font text -> Roboto SemiBold, not bold."""
    is_title = re.search(r'<p:ph\b[^>]*type="(?:title|ctrTitle)"', sp) is not None

    latin = f'<a:latin typeface="{SEMIBOLD}"/>'
    unbold = lambda attrs: re.sub(r'\bb="1"', 'b="0"', attrs)

    def target(attrs):
        if not re.search(r'\bb="1"', attrs):
            return False
        sz = re.search(r'\bsz="(\d+)"', attrs)
        size = int(sz.group(1)) / 100 if sz else None
        return not ((size is None and is_title) or (size is not None and (size >= 23 or size == 9)))

    def paired(m):
        tag, attrs, body = m.groups()
        if not target(attrs):
            return m.group(0)
        if "<a:latin " in body:
            body = re.sub(r'<a:latin typeface="[^"]*"(?: [^/>]*)?/>', latin, body, count=1)
        else:
            k = re.search(RPR_AFTER_LATIN, body)
            body = body[:k.start()] + latin + body[k.start():] if k else body + latin
        return f"<a:{tag}{unbold(attrs)}>{body}</a:{tag}>"

    def single(m):
        tag, attrs = m.groups()
        if not target(attrs):
            return m.group(0)
        return f"<a:{tag}{unbold(attrs)}>{latin}</a:{tag}>"

    sp = re.sub(r"<a:(defRPr|rPr|endParaRPr)\b([^>]*?)(?<!/)>(.*?)</a:\1>", paired, sp, flags=re.S)
    return re.sub(r"<a:(defRPr|rPr|endParaRPr)\b([^>]*?)/>", single, sp)


FONTS_DIR = posixpath.join(posixpath.dirname(posixpath.abspath(__file__)), "..", "..", "fonts")
# (typeface PowerPoint uses, embeddedFont slot, file in fonts/)
EMBED = [("Roboto", "regular", "Roboto-Regular.ttf"), ("Roboto", "bold", "Roboto-Bold.ttf"),
         ("Roboto", "italic", "Roboto-Italic.ttf"), ("Roboto", "boldItalic", "Roboto-BoldItalic.ttf"),
         ("Roboto SemiBold", "regular", "Roboto-SemiBold.ttf"), ("Roboto SemiBold", "italic", "Roboto-SemiBoldItalic.ttf")]


def eot(ttf):
    """Wrap a TrueType font as uncompressed Embedded OpenType (version 0x00020001) — the format of
    PowerPoint's embedded font parts (.fntdata)."""
    import struct
    n = struct.unpack(">H", ttf[4:6])[0]
    tab = {ttf[12 + 16 * i:16 + 16 * i].decode("latin1"): struct.unpack(">II", ttf[20 + 16 * i:28 + 16 * i])
           for i in range(n)}
    os2 = tab["OS/2"][0]
    weight, fstype = struct.unpack(">H", ttf[os2 + 4:os2 + 6])[0], struct.unpack(">H", ttf[os2 + 8:os2 + 10])[0]
    panose = ttf[os2 + 32:os2 + 42]
    urange = struct.unpack(">4I", ttf[os2 + 42:os2 + 58])
    fsel = struct.unpack(">H", ttf[os2 + 62:os2 + 64])[0]
    cprange = struct.unpack(">2I", ttf[os2 + 78:os2 + 86])
    csa = struct.unpack(">I", ttf[tab["head"][0] + 8:tab["head"][0] + 12])[0]
    no = tab["name"][0]
    cnt, so = struct.unpack(">HH", ttf[no + 2:no + 6])
    names = {}
    for j in range(cnt):
        pid, eid, lid, nid, ln, off = struct.unpack(">6H", ttf[no + 6 + 12 * j:no + 18 + 12 * j])
        if pid == 3 and eid == 1 and lid == 0x409:
            names[nid] = ttf[no + so + off:no + so + off + ln].decode("utf-16-be").encode("utf-16-le")
    body = b""
    for nid in (1, 2, 5, 4):  # family, style, version, full name
        s = names.get(nid, b"")
        body += struct.pack("<HH", 0, len(s)) + s
    body += struct.pack("<HH", 0, 0)  # Padding5, RootStringSize
    head = struct.pack("<IIII", 0, len(ttf), 0x00020001, 0) + panose + struct.pack(
        "<BBIHH4I2II4I", 1, fsel & 1, weight, fstype, 0x504C, *urange, *cprange, csa, 0, 0, 0, 0)
    total = len(head) + len(body) + len(ttf)
    return struct.pack("<I", total) + head[4:] + body + ttf


def embed_fonts(out):
    pres, rels = "ppt/presentation.xml", "ppt/_rels/presentation.xml.rels"
    by_face, rel_xml = {}, out[rels].decode("utf8")
    for i, (face, slot, f) in enumerate(EMBED, 1):
        with open(posixpath.join(FONTS_DIR, f), "rb") as fh:
            out[f"ppt/fonts/font{i}.fntdata"] = eot(fh.read())
        rid = f"rIdFont{i}"
        rel_xml = rel_xml.replace("</Relationships>", f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/'
                                  f'officeDocument/2006/relationships/font" Target="fonts/font{i}.fntdata"/></Relationships>')
        by_face.setdefault(face, []).append(f'<p:{slot} r:id="{rid}"/>')
    out[rels] = rel_xml.encode("utf8")
    order = ["regular", "bold", "italic", "boldItalic"]  # schema order inside p:embeddedFont
    lst = "<p:embeddedFontLst>" + "".join(
        f'<p:embeddedFont><p:font typeface="{face}" pitchFamily="2" charset="0"/>'
        + "".join(sorted(els, key=lambda e: order.index(re.search(r"<p:(\w+)", e).group(1)))) + "</p:embeddedFont>"
        for face, els in by_face.items()) + "</p:embeddedFontLst>"
    x = out[pres].decode("utf8")
    x = re.sub(r"<p:embeddedFontLst>.*?</p:embeddedFontLst>", "", x, flags=re.S)
    x = re.sub(r"(<p:notesSz\b[^>]*/>)", lambda m: m.group(1) + lst, x, count=1)  # embeddedFontLst follows notesSz
    x = re.sub(r"<p:presentation\b", '<p:presentation embedTrueTypeFonts="1"', x.replace(' embedTrueTypeFonts="1"', ""), count=1)
    x = x.replace(' saveSubsetFonts="1"', "")  # full fonts, so recipients can edit
    out[pres] = x.encode("utf8")
    ct = out["[Content_Types].xml"].decode("utf8")
    if 'Extension="fntdata"' not in ct:
        ct = ct.replace("<Default ", '<Default Extension="fntdata" ContentType="application/x-fontdata"/><Default ', 1)
    out["[Content_Types].xml"] = ct.encode("utf8")


def main(src_path, out_path):
    zin = zipfile.ZipFile(src_path)
    src = {n: zin.read(n) for n in zin.namelist()}

    # 1. Parts to keep: walk relationships from the masters, never into slides.
    pres = "ppt/presentation.xml"
    roots = [p for p in targets(src, pres) if re.match(r"ppt/(slideMasters|notesMasters)/", p)]
    roots += [p for p in targets(src, pres) if p in ("ppt/presProps.xml", "ppt/viewProps.xml", "ppt/tableStyles.xml")]
    roots += [p for p in targets(src, pres) if p.startswith("ppt/theme/")]
    keep, todo = {pres, "docProps/core.xml", "docProps/app.xml"}, list(roots)
    while todo:
        p = todo.pop()
        if p in keep or p not in src or "/slides/" in p or "/notesSlides/" in p:
            continue
        keep.add(p)
        todo += targets(src, p)
    keep |= {rels_path(p) for p in list(keep) if rels_path(p) in src}

    out = {}
    for p in keep:
        data = src[p]
        if p.endswith((".xml", ".rels", ".svg")):
            data = fix_colors(data.decode("utf8")).encode("utf8")
        out[p] = data

    # 2. Themes: SmartCo colours in the notes theme too, Roboto as the font family.
    slide_master = next(p for p in roots if p.startswith("ppt/slideMasters/"))
    main_theme = next(t for t in targets(src, slide_master) if t.startswith("ppt/theme/"))
    scheme = re.search(r"<a:clrScheme.*?</a:clrScheme>", out[main_theme].decode("utf8"), re.S).group(0)
    for p in [p for p in out if re.match(r"ppt/theme/theme\d+\.xml$", p)]:
        x = fix_theme_fonts(out[p].decode("utf8"))
        x = re.sub(r"<a:clrScheme.*?</a:clrScheme>", lambda m: scheme, x, count=1, flags=re.S)
        out[p] = x.encode("utf8")

    # 3. Explicit non-brand text fonts in master / layouts (bullet glyph fonts stay as they are).
    for p in [p for p in out if re.match(r"ppt/(slideMasters|slideLayouts|notesMasters)/[^/]+\.xml$", p)]:
        x = out[p].decode("utf8")
        x = re.sub(r'<a:(latin|ea|cs) typeface="(Calibri|Aptos|Aptos Display|Arial)"(?: [^/>]*)?/>',
                   lambda m: f'<a:{m.group(1)} typeface="{FONT}"/>', x)
        out[p] = x.encode("utf8")

    # 3b. Body-font bold -> Roboto SemiBold 600 (core §4.1: font-body weights 400 / 600). Headings stay Bold 700:
    #     title placeholders, text >= 23 pt, and the 9 pt section label (overline role, font-heading 700).
    for p in [p for p in out if re.match(r"ppt/(slideMasters|slideLayouts)/[^/]+\.xml$", p)]:
        out[p] = re.sub(r"<p:sp>.*?</p:sp>", lambda m: semibold(m.group(0)), out[p].decode("utf8"), flags=re.S).encode("utf8")

    # 3c. Followed hyperlink: secondary is never text (core §3.1) -> primary.
    for p in [p for p in out if re.match(r"ppt/theme/theme\d+\.xml$", p)]:
        out[p] = re.sub(r"(<a:folHlink><a:srgbClr val=\")\w+", r"\g<1>0065FC", out[p].decode("utf8")).encode("utf8")

    # 4. presentation.xml: no slides, no sections.
    x = out[pres].decode("utf8")
    x = re.sub(r"<p:sldIdLst>.*?</p:sldIdLst>|<p:sldIdLst/>", "", x, flags=re.S)
    x = re.sub(r'<p:ext uri="\{521415D9-36F7-43E2-AB2F-B90AF26B5E84\}">.*?</p:ext>', "", x, flags=re.S)  # section list
    out[pres] = x.encode("utf8")

    # 5. Relationship files: drop links to removed parts.
    def prune(rel_xml, base):
        def keep_rel(m):
            el = m.group(0)
            if 'TargetMode="External"' in el:
                return el
            t = re.search(r'Target="([^"]+)"', el).group(1)
            p = posixpath.normpath(t.lstrip("/") if t.startswith("/") else posixpath.join(base, t))
            return el if p in out else ""
        return re.sub(r"<Relationship\b[^>]*/>", keep_rel, rel_xml)
    for p in [p for p in out if p.endswith(".rels")]:
        base = posixpath.dirname(posixpath.dirname(p))
        out[p] = prune(out[p].decode("utf8"), base).encode("utf8")
    out["_rels/.rels"] = prune(src["_rels/.rels"].decode("utf8"), "").encode("utf8")

    # 6. docProps/app.xml: no slide list.
    out["docProps/app.xml"] = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">'
        "<Application>Microsoft Office PowerPoint</Application><PresentationFormat>Widescreen</PresentationFormat>"
        "<Company>SmartCo</Company></Properties>").encode("utf8")

    # 7. Content types: template main part, only parts that remain.
    ct = src["[Content_Types].xml"].decode("utf8").replace(PRESENTATION_CT, TEMPLATE_CT)
    ct = re.sub(r'<Override PartName="/([^"]+)"[^>]*/>', lambda m: m.group(0) if m.group(1) in out else "", ct)
    out["[Content_Types].xml"] = ct.encode("utf8")

    # 8. Embed Roboto (regular, bold, italics, SemiBold) so decks open in Roboto without the font installed.
    embed_fonts(out)

    with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", out.pop("[Content_Types].xml"))
        z.writestr("_rels/.rels", out.pop("_rels/.rels"))
        for p in sorted(out):
            z.writestr(p, out[p])
    n_layouts = sum(1 for p in out if re.match(r"ppt/slideLayouts/slideLayout\d+\.xml$", p))
    n_media = sum(1 for p in out if p.startswith("ppt/media/"))
    print(f"{out_path}: {n_layouts} layouts, {n_media} media files, {len(out) + 2} parts")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "SmartCo-Deck.potx")
