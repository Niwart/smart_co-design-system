"""Turn a designer's SmartCo deck (.pptx) into the clean PowerPoint master SmartCo-Deck.potx.

Keeps:   the slide master, all slide layouts, the notes master, themes, and the media they use.
Removes: all slides and their notes / media, SharePoint metadata (customXml, custom.xml), Office add-ins
         (webextensions), revision info, the thumbnail.
Fixes:   colour codes -> 00-core.md values (where a colour is used is not changed);
         theme font family -> Roboto (headings and body), Calibri -> Roboto;
         the notes-master theme gets the same SmartCo colours and fonts.

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
