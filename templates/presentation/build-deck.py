"""Generate Deck.dc.html from the Figma master values (SmartCo-Assets-v2.0, node 6199:2).
Usage: python3 build-deck.py Deck.dc.html"""
import sys, html

OUT = sys.argv[1]
P, S, Y, K, W = "#0065FC", "#43E6A2", "#E6D443", "#000000", "#FFFFFF"
A = "./assets/"
LOGO_C, LOGO_W = "../../assets/logo-color.svg", "../../assets/logo-white.svg"


def img(f, l, t, w, h):
    return f'<img src="{A}{f}" alt="" style="position:absolute;left:{l}px;top:{t}px;width:{w}px;height:{h}px;display:block">'


def frame(f, l, t, w, h, inset):
    return (f'<div style="position:absolute;left:{l}px;top:{t}px;width:{w}px;height:{h}px">'
            f'<div style="position:absolute;inset:{inset}"><img src="{A}{f}" alt="" style="display:block;width:100%;height:100%"></div></div>')


def logo(white, l, t, w):
    return (f'<img src="{LOGO_W if white else LOGO_C}" alt="SmartCo" '
            f'style="position:absolute;left:{l}px;top:{t}px;width:{w}px;height:auto;display:block">')


def text(l, t, w, size, lines, weight=400, lh="0.9", color=K, extra=""):
    """lines: list of str or (str, weight)."""
    ps = []
    for ln in lines:
        txt, wt = (ln, None) if isinstance(ln, str) else ln
        st = f' style="font-weight:{wt}"' if wt else ""
        ps.append(f"<div{st}>{html.escape(txt)}</div>")
    wcss = f"width:{w}px;" if w else "white-space:nowrap;"
    return (f'<div style="position:absolute;left:{l}px;top:{t}px;{wcss}font-size:{size}px;line-height:{lh};'
            f'font-weight:{weight};color:{color};{extra}">' + "".join(ps) + "</div>")


def ph(l, t, w, h, name, border=P, fill=True):
    bg = "background:rgba(0,101,252,0.08);" if fill else ""
    return (f'<div data-placeholder="{name}" style="position:absolute;left:{l}px;top:{t}px;width:{w}px;height:{h}px;'
            f'box-sizing:border-box;{bg}border:2px dashed {border}"></div>')


def footer(line_top=982.7, line_w=1776):
    return (logo(False, 72, 1012, 159) +
            f'<div style="position:absolute;left:72px;top:{line_top - 1}px;width:{line_w}px;height:0;border-top:2px solid {K}"></div>')


def label(w=1779, color=K):
    return text(75, 69, w, 18, ["ADD SECTION TITLE HERE"], weight=700, color=color)


def title(lines, w=1782, color=K, top=105):
    return text(75, top, w, 88, lines, weight=700, lh="101.76px", color=color)


def levels(l, t, w, items, color=K):
    """Body placeholder levels (deck.md §3): 1 = 34 px / 400, 2 = 24 px / 600, 3 = 24 px / 400, 4 = 24 px bullet."""
    css = {1: "font-size:34px;font-weight:400", 2: "font-size:24px;font-weight:600",
           3: "font-size:24px;font-weight:400", 4: "font-size:24px;font-weight:400"}
    ps = "".join(f'<div style="{css[lv]}">{"• " if lv == 4 else ""}{html.escape(txt)}</div>' for lv, txt in items)
    return f'<div style="position:absolute;left:{l}px;top:{t}px;width:{w}px;line-height:1;color:{color}">{ps}</div>'


BODY = [(1, "Introduction"), (2, "Bold body copy"), (3, "Body copy"), (4, "Bullet point")]


def body(top, w=487):
    return levels(76.4, top, w, BODY)


CONTACT = "enquiries@smart-co.co.uk · smart-co.co.uk"


def cover_text(top, w, white):
    c = W if white else K
    return (text(72, top, w, 46, ["Your Digital Enablement Partner", "for Complex Change"], lh="1", color=c) +
            text(72, top + 153, w, 28, ["Add strapline here"], lh="1", color=c) +
            text(72, top + 258, w, 28, ["Presenter Name   |   Date"], weight=600, lh="1", color=c, extra="white-space:pre;"))


ONE = ["Add single line title here"]
TWO = ["Add title here on", "two lines"]

slides = [
    ("01 Cover A", "cover-a", W,
     img("s01-shape1.svg", 1154, 0, 764, 983) + img("s01-shape2.svg", 1226, 1, 692, 871) +
     logo(False, 72, 261, 850.5) + cover_text(525, 924, False) +
     text(1353, 1018.5, None, 24.86, [CONTACT], weight=600, lh="1", color=P)),
    ("02 Cover A v2", "cover-a-v2", W,
     ph(906, 0, 1014, 1080, "Picture") + ph(57, 807, 690, 135, "Accreditation badges", fill=False) +
     logo(False, 72, 180, 663) + cover_text(396, 693, False) +
     text(70.5, 1018.5, None, 24.86, [CONTACT], weight=600, lh="1", color=P)),
    ("03 Cover B", "cover-b", W,
     img("bg-primary.svg", 0, 1, 1918, 1078) + img("s03-shape2.svg", 1154, 2, 764, 983) + img("s03-shape3.svg", 1226, 1, 692, 871) +
     logo(True, 72, 261, 850.5) + cover_text(523.5, 924, True) +
     text(1353, 1018.5, None, 24.86, [CONTACT], weight=600, lh="1", color=W)),
    ("04 Cover B v2", "cover-b-v2", W,
     img("bg-primary.svg", 0, 1, 1918, 1078) + ph(906, 0, 1014, 1080, "Picture") +
     ph(57, 807, 690, 135, "Accreditation badges", border=W, fill=False) +
     logo(True, 72, 178.5, 661.5) + cover_text(396, 693, True) +
     text(70.5, 1018.5, None, 24.86, [CONTACT], weight=600, lh="1", color=W)),
    ("05 Partnership", "partnership", W,
     img("s05-shape1.svg", 0, 1, 959, 1078) + img("s05-shape2.svg", 901, 473, 116, 134) +
     img("s05-shape3.svg", 915, 489, 88, 102) + img("s05-shape4.svg", 946, 524, 27, 32) +
     ph(1152, 370.5, 552, 331.5, "Client logo") + logo(True, 213, 472.5, 532.5)),
    ("06 Section header A", "section-header-a", W,
     img("bg-primary.svg", 0, 1, 1918, 1078) + img("s01-shape1.svg", 1154, 0, 764, 983) + img("s06-shape3.svg", 962, 1, 956, 552) +
     f'<div style="position:absolute;left:66px;top:0;width:976.5px;height:1080px;display:flex;flex-direction:column;justify-content:center;'
     f'font-size:140px;line-height:0.9;font-weight:700;color:{W}"><div>Section title</div><div>goes here</div></div>'),
    ("07 Contents", "contents", W,
     img("s07-shape1.svg", 1359, 757, 559, 322) + img("s07-shape2.svg", 1113, 1, 805, 1078) + img("s07-shape3.svg", 962, 1, 956, 552) +
     footer(982.5, 1342.5) + text(73.5, 271.5, 903, 160, ["Title"], weight=700, lh="144px") +
     text(70.5, 489, 906, 48, [f"Content {i}" for i in range(1, 6)])),
    ("08 Full page image", "full-image", W, ph(0, 0, 1920, 1080, "Full page picture")),
    ("09 Template 1", "template-1", W, footer() + label() + title(ONE) + body(304.5)),
    ("10 Template 2", "template-2", W,
     img("s10-shape1.svg", 1643, 281, 275, 636) + img("s10-shape2.svg", 1010, 555, 908, 524) + footer() + label() + title(ONE) + body(304.5)),
    ("11 Template 3", "template-3", W, footer() + label() + title(TWO) + body(391.5)),
    ("12 Template 4", "template-4", W,
     img("s10-shape1.svg", 1643, 281, 275, 636) + img("s10-shape2.svg", 1010, 555, 908, 524) + footer() + label() + title(TWO) + body(391.5)),
    ("13 Two column with image", "two-column-image", W,
     ph(997.5, 64.5, 849, 915, "Picture") + footer(969.8, 851.5) + label(850.5) + title(TWO, 849) + body(396, 847)),
    ("14 Two column blue", "two-column-blue", W,
     img("s14-shape1.svg", 993, 0, 925, 1079) + footer(969.8, 851.5) + label(850.5) + title(TWO, 849) + body(396, 847)),
    ("15 Two column green", "two-column-green", W,
     img("s15-shape1.svg", 993, 0, 925, 1079) + footer(969.8, 851.5) + label(850.5) + title(TWO, 849) + body(396, 847)),
    ("16 Alternate graphic A", "alternate-graphic-a", W,
     img("s16-shape1.svg", 1548, 145, 370, 473) + img("s16-shape2.svg", 1265, 431, 653, 648) + footer() + label() + title(ONE) + body(304.5)),
    ("17 Alternate graphic B", "alternate-graphic-b", W,
     img("s17-shape1.svg", 1447, 234, 471, 845) + img("s17-shape2.svg", 982, 845, 936, 234) + footer() + label() + title(TWO) + body(391.5)),
    ("18 Delivery yellow", "delivery-yellow", W,
     img("s18-shape1.svg", 824, 532, 1094, 547) + footer() + label() + title(TWO) + body(391.5)),
    ("19 Quote", "quote", W,
     img("s19-shape1.svg", 478, 0, 1440, 1079) + img("quote-open.svg", 586, 103, 69, 69) + img("quote-open.svg", 631, 103, 69, 69) +
     img("quote-close-a.svg", 1744, 711, 68, 69) + img("quote-close-b.svg", 1700, 711, 68, 69) +
     logo(False, 72, 1011, 157.5) +
     text(76.5, 111, 403.5, 60, ["What our", "clients say"], weight=700) +
     levels(76.4, 396, 324, [(2, "Client company name"), (3, "Client overview text")]) +
     text(727.5, 118.5, 943.5, 100, ["This is a quote from a client company."], weight=700, color=W) +
     text(726, 826.5, 948, 30, ["Quote source text goes here"], color=W)),
    ("20 Quote lead", "quote-lead", W,
     img("s20-shape1.svg", 674, 0, 1244, 1079) + frame("s20-portrait-frame.svg", 74, 222, 219, 220, "-0.68%") +
     ph(96, 244.5, 175.5, 175.5, "Portrait") + logo(False, 72, 1011, 157.5) +
     text(76.5, 111, 556.5, 60, ["Your SmartCo Lead"], weight=700) +
     levels(73.2, 499, 521, [(2, "Firstname Lastname"), (2, "Job title"), (3, "Add text here")]) +
     levels(786, 218.5, 469, [(2, "Client name here"), (3, "Project type and text")], W) +
     levels(1341.6, 215.5, 472, [(2, "Expertise areas"), (3, "Text"), (4, "Bullet point")], W)),
    ("21 Section header B", "section-header-b", W,
     img("bg-primary.svg", 0, 1, 1918, 1078) + img("s21-shape2.svg", 1400, 1, 518, 605) + img("s21-shape3.svg", 1351, 1, 499, 452) +
     ph(1420.5, 69, 367.5, 226.5, "Client logo") + label(1135.5, W) + title(TWO, 1134, W)),
    ("22 Meet the team", "meet-the-team", W,
     img("s22-shape1.svg", 0, 527, 926, 552) + img("s22-shape2.svg", 992, 1, 926, 552) +
     "".join(frame("s22-card-a.svg" if i % 2 == 0 else "s22-card-b.svg", x, y, 415, 557, "-0.18% -0.24%")
             for i, (x, y) in enumerate([(77, 367), (530, 367), (976, 366), (1429, 366)])) +
     "".join(frame("s22-frame-a.svg" if i % 2 == 0 else "s22-frame-b.svg", x, 280, 175, 175, "-0.86%")
             for i, x in enumerate([108, 563, 1008, 1461])) +
     "".join(ph(x, 301.5, 130.5, 130.5, f"Portrait {i + 1}") for i, x in enumerate([130.5, 586.5, 1030.5, 1485])) +
     footer() + text(73.5, 111, 1659, 88, ["Meet the team"], weight=700, lh="101.76px") +
     "".join(text(x, 516, 348, 28, ["Firstname Lastname"], weight=600, lh="1") +
             levels(x, 548, 348, [(3, "Managing Director"), (3, "Intro text goes here"), (4, "Bullet point")])
             for x in [109.5, 562.5, 1009.5, 1462.5])),
    ("23 End slide", "end", W,
     img("bg-primary.svg", 0, 1, 1918, 1078) + img("s23-shape2.svg", 1235, 2, 683, 878) + img("s23-shape3.svg", 1299, 1, 619, 779) +
     logo(True, 72, 130.5, 592.5) +
     text(67.7, 333.6, 980, 36, ["Your Digital Enablement Partner for Complex Change."], weight=600, lh="1", color=W) +
     text(1353, 1018.5, None, 24.86, [CONTACT], weight=600, lh="1", color=W)),
]


def key(slug):
    return "show" + "".join(p.capitalize() for p in slug.replace("-", " ").split())


parts = ["""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<!-- @template name="Presentation (16:9, 1920×1080)" description="SmartCo sales deck — 23 layouts, same positions and type scale as SmartCo-Deck.potx (shapes from SmartCo-Assets-v2.0.fig, node 6199:2). Rules: deck.md" -->
<helmet><script src="./ds-base.js"></script><style>body{margin:0;background:#e9e9e9}</style></helmet>
<div style="display:flex;flex-direction:column;gap:48px;padding:48px;font-family:Roboto,system-ui,sans-serif;align-items:flex-start">"""]
for name, slug, bg, inner in slides:
    parts.append(f'<sc-if value="{{{{ {key(slug)} }}}}" hint-placeholder-val="{{{{ true }}}}">\n'
                 f'<section data-screen-label="{name}" data-layout="{slug}" style="position:relative;width:1920px;height:1080px;'
                 f'overflow:hidden;background:{bg};flex:none">\n{inner}\n</section>\n</sc-if>')
slugs = [s[1] for s in slides]
opts = ["all"] + slugs
import json
props = {"variant": {"editor": "enum", "options": opts, "default": "all",
                     "tsType": "|".join(f"'{o}'" for o in opts)}}
props_attr = html.escape(json.dumps(props, ensure_ascii=False, separators=(",", ":")), quote=True)
vals = ",\n".join(f"      {key(s)}: v === 'all' || v === '{s}'" for s in slugs)
parts.append(f"""</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{props_attr}">
class Component extends DCLogic {{
  renderVals() {{
    const v = this.props.variant ?? 'all';
    return {{
{vals}
    }};
  }}
}}
</script>
</body>
</html>
""")
open(OUT, "w").write("\n".join(parts))
print(len(slides), "slides")
