---
file: documents.md
brand: SmartCo
version: 0.27
updated: 2026-10-20
inherits: 00-core.md v1.1
covers: Word documents (.docx) — white papers, proposals, reports, sell sheets
reference: "AI in Programme Delivery — Campbell & Khan" (June 2026 white paper, A4, 27 pp.)
template: templates/document/SmartCo-Document.dotx
Overrides:
  - core §2 / §3 "only colors defined in section 3" — documents MAY use 5 tint tokens (§10.1). Reason: callout, card and table backgrounds in long-form documents. Approved 2026-09-30.
  - core §2 "max one accent per layout" (SHOULD) — stage/category coding may use primary + accent-1 + accent-2 together (§6.2). Reason: categorical data coding. Approved 2026-09-30.
  - core §4 type sizes — documents use their own size scale (§3.0). Core defines roles only.
  - core §4.2 role `overline` — NOT used in documents (§3.1). ALL CAPS only in `Eyebrow`. Approved 2026-09-30.
  - core §2 "max one accent per layout" (SHOULD) — callout left borders rotate `primary` → `accent-1` → `accent-2` in equal share across the document (§6.1). Reason: brand decision for documents. Approved 2026-09-30.
  - core §3.1 `primary` "highlighted words in headlines" — NOT used in documents: `Heading 1`, `Heading 2`, `Heading 3` are set entirely in `neutral-900`, no highlighted words (§3.3). Reason: brand decision for documents. Approved 2026-09-30.
  - core §4.2 `h1` line height 1.2 — `Heading 1` in documents uses 1.5 (multiple). Reason: brand decision for documents. Approved 2026-09-30.
  - core §3 colors — `Author Contact` uses #404040 (documents-only token `neutral-750`), author contact lines only (§4). Reason: brand decision. Approved 2026-10-08.
  - core §4.3 scale ratio (SHOULD) — h1 20 / h2 18 / h3 16 pt sit closer than 1.25. Reason: brand decision for documents. Approved 2026-09-30.
---

# SmartCo — Documents (Microsoft Word)

All tokens (`primary`, `neutral-900`, `h1`, `body`…) are defined in `00-core.md`.

**Text color in documents: all body-level text is `neutral-900`.** `neutral-700` MUST NOT be used for text in documents (Normal, Body Compact, Table Text, Caption, Endnote Entry, Footer, page numbers, TOC, list markers, followed hyperlinks). It remains only as a theme slot (Dark 2, Accent 5) and for chart axes/gridlines. This file only maps them onto Word. If this file and core conflict, core wins.

## 0. Before you start

- MUST start every new document from the SmartCo Word template (`templates/document/SmartCo-Document.dotx`, see §12), never from a blank Word file or a copy of an old client doc.
- MUST format only through **named styles** (§3). Direct formatting (manually picking a font, size or color on selected text) MUST NOT be used.
- Fonts are embedded: the template and sample file already contain Roboto 400, 600, 700 + italics, so they open in Roboto on computers without it. *File → Options → Save → Embed fonts in the file* is ON in the template — keep it ON and leave *Embed only the characters used* OFF so recipients can edit. For external recipients prefer PDF (§12).

## 1. Page setup

| Setting | Value | Word units |
|---|---|---|
| Paper | A4 portrait, 210 × 297 mm | 11906 × 16838 twips |
| Margins top / bottom | 30 mm | 1701 twips |
| Margins left / right | 25 mm | 1418 twips |
| Header / footer distance | 7 mm | 397 twips |
| Gutter | 0 | — |
| First page | *Different first page* ON (cover has no header/footer) | `titlePg` |
| Columns | 1 (text boxes / tables handle multi-column layouts) | — |

- Text column width = 160 mm (9 072 twips). Full-width tables and figures MUST NOT exceed it.
- SHOULD start each H1 section on a new page (*Paragraph → Line and Page Breaks → Page break before* set in the `Heading 1` style, not with manual breaks).

## 2. Theme (Design → Colors / Fonts)

Word styles, charts and SmartArt read from the document theme. The theme MUST contain only core colors.

### 2.1 Theme colors

| Word slot | Token | HEX |
|---|---|---|
| Text/Background – Dark 1 | `neutral-900` | #000000 |
| Text/Background – Light 1 | `white` | #FFFFFF |
| Text/Background – Dark 2 | `neutral-700` | #4D4D4D |
| Text/Background – Light 2 | `white` | #FFFFFF |
| Accent 1 | `primary` | #0065FC |
| Accent 2 | `secondary` | #43E6A2 |
| Accent 3 | `accent-1` | #E65C43 |
| Accent 4 | `accent-2` | #E6D443 |
| Accent 5 | `neutral-700` | #4D4D4D |
| Accent 6 | `neutral-200` | #CCCCCC |
| Hyperlink | `primary` | #0065FC |
| Followed hyperlink | `neutral-900` | #000000 |

- The reference doc still carries Office defaults in Accent 5 (#A02B93), Accent 6 (#4EA72E) and Hyperlink (#467886 / #0000FF in the Hyperlink style). These MUST be replaced as above.

### 2.2 Theme fonts

| Word slot | Family | Token |
|---|---|---|
| Headings (major) | Roboto Bold | `font-heading` |
| Body (minor) | Roboto | `font-body` |

- MUST NOT use Roboto Condensed, SemiCondensed, Light, Medium, Black or any weight outside core §4.1 (400, 600, 700).
- Any other font found in the file (e.g. a stray *Times New Roman* run in the reference doc) MUST be removed — use *Clear formatting* and reapply the style.

## 3. Styles

### 3.0 Size scale (documents only)

Applies to Word/PDF documents only; not part of core. Built around a 12 pt body.

| Token | Size | Used by |
|---|---|---|
| `doc-size-min` | 7 pt | Page numbers only |
| `doc-size-xs` | 9 pt | `Eyebrow`; `Caption`: cover authors line, figure captions, sources, bylines, signature roles, copyright; footer; endnotes |
| `doc-size-sm` | 10 pt | `Body Compact`, `Card Label`, `Stat Text`: tables, callouts, cards, stat blocks, chart labels |
| `doc-size-md` | 12 pt | `Normal` (body, cover subtitle), `Cover Date`, TOC |
| `doc-size-lg` | 16 pt | `Heading 3` |
| `doc-size-xl` | 18 pt | `Heading 2` |
| `doc-size-2xl` | 20 pt | `Heading 1`, `TOC Heading` |
| `doc-size-3xl` | 28 pt | `Key Number`, `Key Number Inverse` |
| `doc-size-4xl` | 36 pt | `Cover Title` (display) |

- MUST NOT use sizes outside this scale.

### 3.1 Style map (core role → Word style)

| Core role | Word style | Font / weight | Size | Line spacing | Before / after | Color | Case |
|---|---|---|---|---|---|---|---|
| `display` | `Cover Title` | Roboto 700 | 36 pt | 1.2 | 0 / 12 pt | `neutral-900` | Sentence |
| `h1` | `Heading 1` | Roboto 700 | 20 pt | 1.5 (multiple) | 18 / 18 pt | `neutral-900`; bottom rule 4.5 pt `primary`, 1 pt from text | Sentence |
| `h2` | `Heading 2` | Roboto **600** | 18 pt | 1.2 | 12 / 6 pt | `neutral-900` | Sentence |
| `h2` (small) | `Heading 3` | Roboto 600 | 16 pt | 1.2 | 8 / 4 pt | `neutral-900` | Sentence |
| `body` | `Normal` | Roboto 400 | 12 pt | 1.5 | 0 / 8 pt | `neutral-900` | Sentence |
| `body` (compact) | `Body Compact` | Roboto 400 | 10 pt | 1.4 | 0 / 4 pt | `neutral-900` | Sentence |
| `body-strong` | `Card Label` / `Card Label Inverse` | Roboto 600 | 10 pt | 1.4 | 0 / 0 | `neutral-900` / `white` | Sentence |
| `eyebrow` | `Eyebrow` | Roboto 400 | 9 pt | 1.5 | 0 / 4 pt | `primary` | ALL CAPS, ≤ 3 words |
| `body` | `Cover Date` | Roboto 400 | 12 pt | 1.5 | 0 / 8 pt | `primary` | Sentence |
| `body` | `Author Name` | Roboto 400 | 12 pt | 1.5 | 0 / 0 | `neutral-900` | Sentence |
| `body` | `Author Role` | Roboto 400 | 12 pt | 1.5 | 0 / 2 pt | `primary` | Sentence |
| `caption` | `Author Contact` | Roboto 400 *italic* | 9 pt | 1.4 | 0 / 0 | #404040 (`neutral-750`) | As written |
| `body-strong` | `Callout Lead` (character) | Roboto 700 | inherit | inherit | — | `neutral-900` | Sentence |
| `body-strong` | `Callout Quote` (character) | Roboto 700 | inherit | inherit | — | `neutral-900` | As quoted |
| `body-strong` | `Strong` (character) | Roboto 600 | inherit | inherit | — | `neutral-900` | Sentence |
| `caption` | `Caption` | Roboto 400, spacing +1% | 9 pt | 1.4 | 4 / 12 pt | `neutral-900` | Sentence |
| `caption` | `Endnote Entry` | Roboto 400, spacing +1% | 9 pt | 1.4 | 0 / 3 pt | `neutral-900` | Sentence; auto-numbered «1.», 6 mm hanging |
| — | `Callout Spacer` | Roboto 400 | 1 pt | Exactly 1 pt | 0 / 12 pt | — | Empty paragraph, only after callouts / stat blocks (§6.1) |
| `number` | `Key Number` | Roboto 700, spacing −2% | 28 pt | Exactly 1.0 | 0 / 4 pt | `neutral-900` — on `accent-2` fill | Units in caps |
| `number` | `Key Number Inverse` | as above | 28 pt | Exactly 1.0 | 0 / 4 pt | `white` — on `primary` fill | Units in caps |
| `body` (compact) | `Stat Text` / `Stat Text Inverse` | Roboto 400 | 10 pt | 1.4 | 0 / 0 | `neutral-900` / `white` | Sentence |

- Word has no 600 weight inside the "Roboto" family: 700 = *Roboto* + **Bold**; 600 = family *Roboto SemiBold*, not bold. The template styles are already set this way.

- `Heading 1` carries a full-width bottom rule: 4.5 pt, `primary`, 1 pt spacing (paragraph border, as in the reference doc). `Heading 1 Numbered` and `TOC Heading` inherit it. No other heading has a rule.
- `Heading 2` in the reference doc uses the Roboto Bold theme font (700) — MUST be changed to 600 per core §4.2.
- `Body Compact` is for text inside tables, callouts and stage cards only — never for running text.
- MUST NOT go below 7 pt for any text (page numbers only), 9 pt for everything else.
- `Overline` MUST NOT be used in documents. ALL CAPS text only in `Eyebrow` (units in numbers excepted).
- `Eyebrow` is a short label above a heading or the cover title (e.g. "WHITE PAPER", "CASE STUDY"). ≤ 3 words. Any number per page, but always directly above a heading or the cover title — never on its own.
- `Cover Date` is used once, on the cover only, as its own paragraph ("June 2026"). `primary` on `white` = 5.0:1, passes core contrast.
- `Caption` is Word's built-in caption style — *References → Insert Caption* (label "Figure") applies it automatically.
- `Title` (Word default) MUST NOT be used; the reference doc uses it for big numbers — use `Key Number` instead.

### 3.2 Paragraph rules

- MUST left-align all body text; justified and centered body text are not allowed (core §4.3). Centering is not used; stat blocks are left-aligned too.
- MUST use *Widow/Orphan control* and *Keep with next* on all headings.
- MUST NOT create space with empty paragraphs or repeated Enter — use style spacing. **Only exception:** `Callout Spacer` (§6.1).
- MUST NOT type bullets (`•`) or numbers manually — use `List Bullet` / `List Number` (§3.4).

### 3.3 No highlighted words in headings

- `Heading 1`, `Heading 2`, `Heading 3` MUST NOT contain words or phrases colored `primary` (or any other color). The whole heading stays `neutral-900`. Approved override of core §3.1.
- No heading in a document is set in `primary`, including the `Cover Title`.

### 3.4 Lists

| Style | Marker | Indent | Spacing |
|---|---|---|---|
| `List Bullet` | `–` or `•` in `primary` | 6 mm hanging | 0 / 4 pt |
| `List Bullet 2` | `–` in `neutral-900` | 12 mm hanging | 0 / 2 pt |
| `List Number` | `1.` `2.` in `neutral-900` | 6 mm hanging | 0 / 4 pt |

- Bullets SHOULD be ≤ 2 lines; ≤ 7 per list.

## 4. Document anatomy

Order used by SmartCo white papers (reference doc). Sections marked * are optional for proposals/sell sheets.

1. **Cover** — optional `Eyebrow` with the document type ("WHITE PAPER"); `Cover Title` in `neutral-900` (the paper's name, ≤ 8 words); subtitle in `Normal`; authors line ("By Callum Campbell and Sahar Khan") in `Caption`; date as a separate paragraph in `Cover Date` (`primary`, "June 2026"); logo (`logo-color.svg` on white / `logo-white.svg` on `primary`), brand graphic `assets/brand-hexagons.png` (§8). No header/footer.
2. **Table of contents*** — `TOC Heading` (= `h1` 20 pt), `TOC 1` (body 12 pt, 600) and `TOC 2` (body 12 pt, 400, indent 6 mm), right tab with page numbers, no dot leaders. MUST be a Word-generated TOC (*References → Table of Contents*), updated before export.
3. **Foreword*** — `Heading 1`, body, signature block: name in `Strong`, role in `Caption`, one per line.
4. **Executive summary** — `Heading 1`, ≤ 1 page, ends with one callout (§6.1) and optionally one stat pair (§5).
5. **Numbered sections** — `Heading 1` numbered "1. Title", sub-sections `Heading 2` numbered "2a. Title". Numbering MUST come from multilevel list linked to heading styles, not typed.
6. **Practitioner lens / guest section*** — `Heading 2` + byline in `Caption` ("By Sahar Khan, Transformation and AI expert in financial services"). The reference doc uses *Subtle Emphasis* (#404040, italic) — replace with `Caption`.
7. **Conclusion** — `Heading 2` inside the last section, or `Heading 1`.
8. **Appendix*** — definitions as `Normal` paragraphs: term in `Strong` followed by ". " then definition.
9. **Endnotes** — `Heading 1` + numbered list in `Endnote Entry` 9 pt. Format: `N. Publisher, "Title", Day Month Year.` Use either Word endnotes or a manual numbered list — MUST NOT mix both (the reference doc mixes 3 Word footnotes with a manual list).
10. **About SmartCo** — `Heading 1` "SmartCo", boilerplate paragraph in `Normal`, website as `Hyperlink` without "https://". Then `Heading 3` "Contact the authors", one `Normal` intro line, and per author:
    - one 2-column `SmartCo Layout Grid` table per author (photo column 2.82 cm, text column the rest, both vertically centered), followed by one `Callout Spacer`;
    - photo: **circle, 2.25 × 2.25 cm**, inline picture with *Ellipse* shape. The template holds a grey placeholder (`neutral-200`) — replace with *Change Picture* so the circle crop is kept. Same size and treatment for every author; a square head-and-shoulders photo, face centered;
    - `Author Name` — Normal 12 pt, `neutral-900` ("Callum Campbell");
    - `Author Role` — Normal 12 pt, `primary` ("SmartCo, Head of Clients and Growth" — company first for SmartCo authors);
    - `Author Contact` — 9 pt *italic*, #404040: `email` and `LinkedIn` on one line, separated by two em spaces, no "https://", not underlined;
    - order: SmartCo authors first, then guest authors.
11. **About the authors** — `Heading 1`, one `Normal` paragraph per author (≤ 60 words), starting with the full name in `Strong`, third person ("Callum Campbell leads…"). Same author order as the contact block. Photo optional (square, same size for all, §8).
12. **Back page** — copyright line in `Caption` (§9).

## 5. Key numbers (stat blocks)

As in the reference doc, a key number and its explanation sit together in a filled table cell (table styles `SmartCo Stat` / `SmartCo Stat Accent`). Only two backgrounds are allowed:

| Background | Table style | Number | Text under it | Notes |
|---|---|---|---|---|
| `primary` | `SmartCo Stat` | `Key Number Inverse` (`white`) | `Stat Text Inverse` (`white`) | Default |
| `accent-2` | `SmartCo Stat Accent` | `Key Number` (`neutral-900`) | `Stat Text` (`neutral-900`) | Counts as the page's one accent |

- Cell padding 12 pt top/bottom, 14 pt left/right; no borders; content left-aligned.
- One line of `Stat Text` under the number: what it measures + source ("…according to Gartner"). ≤ 25 words.
- MAX 2 stat blocks side by side (primary + primary, or primary + accent-2); MAX 1 stat row per page.
- MUST NOT: accent-colored numbers (on any background), accent text on `primary`, `accent-1` or `secondary` fills for stat blocks, stat blocks on tints.

## 6. Callouts and boxes

### 6.1 Callout (e.g. "The argument in brief", "The takeaway", "What this means for a delivery leader", "The pattern to notice")

- Built as a 1-cell table (not a floating text box), full text width, so it flows with the text.
- Background: the matching tint, same as stage cards (§6.2, §10.1). **Left border 3 pt** in the full color, no other borders.
- Title and description both in `Normal` (12 pt), text color `neutral-900` (set by the table style). The title — the first phrase, on its own line — uses the character style `Callout Lead` (Roboto 700 Bold, `neutral-900`). No other styles inside a callout.
- **Title is optional.** A title is the first line of the callout only when ALL are true: (1) it is a separate line/paragraph, (2) it is ≤ 5 words, (3) it is followed by at least one full sentence of copy (e.g. "The takeaway" → sentence).
  - Title present → first line in `Callout Lead` (bold), copy below in `Normal`.
  - No title (the source has only copy, or the first line is > 5 words, or nothing follows it) → the callout contains the copy only, in `Normal`, with no bold line. MUST NOT invent a title, and MUST NOT duplicate or bold the first words of the copy to fake one.
  - A first line of ≤ 5 words with no copy after it is not a callout — set it as normal text or drop the box.
- **Quoted text inside a callout is bold.** Any text in curly quotes “…” in the callout copy (with or without a title) uses the character style `Callout Quote` (Roboto 700, `neutral-900`). The quotation marks are bold too. Applies inside callouts only — quotes in running text stay `Normal`.
- Border color rotates through the document in equal share, in order of appearance: 1st `primary` → 2nd `accent-1` → 3rd `accent-2` → 4th `primary` …

| Order | Table style | Fill | Left border |
|---|---|---|---|
| 1, 4, 7 … | `SmartCo Callout` | `primary-tint` #E6F0FF | 3 pt `primary` |
| 2, 5, 8 … | `SmartCo Callout Accent 1` | `accent-1-tint` #FADED9 | 3 pt `accent-1` |
| 3, 6, 9 … | `SmartCo Callout Accent 2` | `accent-2-tint` #FAF6D9 | 3 pt `accent-2` |

- Cell padding: 12 pt top/bottom, 14 pt left/right.
- **Space after a callout:** every callout (and every stat block row, §5) is followed by exactly one empty paragraph in `Callout Spacer` (1 pt high, 12 pt after). It gives the 12 pt gap below the box and keeps two adjacent tables from merging. No space is needed before a callout — the preceding paragraph's own spacing applies.
  - `Callout Spacer` is the only allowed empty paragraph in a document. MUST NOT be used anywhere else, MUST NOT be stacked (one per callout), MUST NOT be replaced by an empty `Normal` paragraph.
  - Inside table cells Word requires a paragraph (e.g. after a nested stat table, or an empty layout column) — use `Callout Spacer` with 0 pt after.
- ≤ 60 words. MAX 1 callout per page.
- An accent-bordered callout does not count as the page's one accent (approved override); a stat block on `accent-2` does.

### 6.2 Stage / category cards

- Cards that code a sequence (Stage 1 / 2 / 3) MAY use `primary`, `accent-1`, `accent-2` as a **fill of a shape or a top band**, one color per card, with the matching tint as card body (`primary-tint`, `accent-1-tint`, `accent-2-tint`). Approved override of the "one accent per layout" SHOULD — reason: categorical data coding.
- Card labels in sentence case ("Stage 1 · Personal productivity"): `Card Label` (`neutral-900`) on `secondary`/`accent-1`/`accent-2` fills, `Card Label Inverse` (`white`) on `primary`. The reference doc's ALL CAPS card labels ("STAGE 1 · …", "FOCUS", "CAPABILITIES") MUST be set in sentence case. Accent-colored label text (e.g. "STAGE 2" in amber, "STAGE 3" in yellow as in the reference) MUST NOT be used.
- Quote lines inside cards ("Faster typing, no learning.") in `Body Compact`, straight after the description.

## 7. Tables

| Element | Rule |
|---|---|
| Width | 100% of text column (160 mm) |
| Header row | `primary` fill + `white` `Body Compact` 600, OR `secondary` fill + `neutral-900` 600. *Repeat as header row* ON |
| Body cells | `white` fill, `Body Compact` 10 pt `neutral-900`; first column MAY be `Strong` `neutral-900` |
| Borders | 0.5 pt `neutral-200` horizontal lines; vertical lines optional (0.5 pt `neutral-200`); no outer frame heavier than 0.5 pt |
| Cell padding | 7 pt top/bottom, 8 pt left/right |
| Vertical align | Center for header, top for body |
| Numbers | Right-aligned, tabular figures |
| Banding | Optional: every second row `neutral-50` |
| Caption | `Caption` below the table: "Figure N. …" |

- MUST build tables with Word tables, never as images or tab-separated text.
- Reference doc borders use #D7DCE3 — replace with `neutral-200` #CCCCCC.

## 8. Figures, charts and imagery

- Every figure/table is numbered in one sequence and captioned below in `Caption`: `Figure N. Sentence explaining what to see.` Use *References → Insert Caption* (label "Figure") so numbering stays automatic.
- Figure title above the image MAY be set in `Heading 3` + one `Body Compact` subtitle line.
- Charts: series colors in theme order — `primary`, `secondary`, `accent-1` (highlight series only). Axes, gridlines and dashed "baseline" lines in `neutral-200`/`neutral-700`; labels in `neutral-900`/`neutral-700`, never accents (core §3.3). Chart text ≥ 9 pt Roboto.
- Chart images exported from other tools MUST use Roboto and core colors; PNG at ≥ 2× (≥ 300 dpi at placed size) or SVG/EMF.
- Brand graphic: hexagon cluster `assets/brand-hexagons.png` (`primary` + `secondary`), on the cover only (optionally the back page). Placement (as in the reference doc):
  - Size **8 × 7.53 cm** (W × H, lock aspect ratio). Fits inside the page: right edge at 20.97 cm, bottom edge at 29.66 cm.
  - *Layout Options*: **Behind Text**, **Fix position on page**; anchor locked.
  - Position: Horizontal — Absolute position **12.97 cm** to the right of *Page*; Vertical — Absolute position **22.13 cm** below *Page*.
  - MUST NOT be recolored, rotated, cropped through a hexagon or moved over the cover text (title, subtitle, authors, date stay above 22.13 cm). The image is anchored to the cover authors paragraph — deleting that paragraph deletes the image.
- Photos: text on photos only with a solid overlay ≥ 80% opacity (core §2). Author photos: square, identical size, same treatment.
- Always set *Alt Text* on every image and chart.
- Wrap: *In line with text* by default; *Top and bottom* for full-width figures. Avoid *Square/Tight* wrap around body text.

## 9. Header, footer and page numbers

| Zone | Content | Style |
|---|---|---|
| Header (pages 2+) | Logo left (`logo-color.svg`, ≥ 30 mm wide), page number right | page number 7 pt Roboto 400 `neutral-900` via `PAGE` field |
| Footer (pages 2+) | "Authors · Month Year" or document title | `Footer` 9 pt `neutral-900` |
| First page | none | — |
| Back page / last line | `© 2026 SmartCo Consulting Ltd. All rights reserved.` | `Caption` |

- The reference footer is 16 pt in #6B7280 — MUST be `Footer` 9 pt `neutral-900`.
- The copyright line MUST be identical everywhere in a document. Reference doc has two variants ("© 2026 SmartCo Consulting Ltd. All rights reserved." and "© SmartCo 2026. All rights reserved") — use the first.

## 10. Color in documents

### 10.1 Tint tokens (documents only — approved override)

| Token | HEX | Pair with | Use for |
|---|---|---|---|
| `primary-tint` | #E6F0FF | `neutral-900` text | Stage 1 card body, callout fill |
| `secondary-tint` | #D9FAEC | `neutral-900` text | Supporting boxes, "indicators" panels |
| `accent-1-tint` | #FADED9 | `neutral-900` text | Stage 2 card body, callout fill |
| `accent-2-tint` | #FAF6D9 | `neutral-900` text | Stage 3 card body, callout fill |
| `neutral-50` | #F7F9FC | `neutral-900` text | Table banding, sidebars, figure backgrounds |

- Tints are background fills only — MUST NOT be used as text, lines or chart series.
- MUST NOT put `primary` text or the logo on tints.
- Only these 5 tints; no other lightened/darkened brand colors.

### 10.2 Replacing off-palette colors

The reference doc contains these values; replace as shown:

| Found in reference | Replace with |
|---|---|
| #595959, #808080, #6B7280, #4D4D4D (grey text) | `neutral-900` |
| #404040 | `neutral-750` — `Author Contact` only; elsewhere `neutral-900` |
| #D7DCE3 (borders) | `neutral-200` |
| #C4B01A, #E1CA1F (dark yellows) | `accent-2` for fills; `neutral-900` for text |
| #1AC47C (dark green) | `secondary` for fills; `neutral-900` for text |
| #CCE0FE, #CBE0FF, #E6F0FF | `primary-tint` |
| #D8F6E7, #D9FAEC | `secondary-tint` |
| #FADED9 | `accent-1-tint` |
| #FBF4C2, #FAF6D9 | `accent-2-tint` |
| #F7F9FC | `neutral-50` |
| #0000FF, #467886 (hyperlinks) | `primary` |

- Proportions per page SHOULD follow core §3.3 (≈ 70% white/neutrals, 25% primary/secondary, ≤ 5% accent).

## 11. Writing rules for documents

- UK English spelling (organisation, programme, prioritise).
- Headlines and headings in sentence case; no full stop at the end.
- Quotation marks: curly double “ ” for quotes and titles; curly single ‘ ’ only for quotes inside quotes. The reference mixes straight " and ‘ ’ — normalise.
- Dashes: spaced en/em dash " — " for breaks; en dash without spaces for ranges ("months 3–9", "2024–2026").
- Numbers: numerals for 10+ and all percentages ("70%", no space); units in caps (M, K, BN).
- No exclamation marks. Short declarative sentences (core §1).
- Citations: superscript endnote number after punctuation.
- Emails and URLs as live hyperlinks, `Hyperlink` style (`primary`), no "https://" in visible text. Exception: author contact lines use `Author Contact` (§4).
- MUST spell-check before sending. Reference doc examples: "enabling teams to, communicate" (stray comma), "Agree evidence standardsstewards" (duplicated word), "re-risk M&A" (likely "de-risk").

## 12. Export and handoff

- Before export: update all fields (*Ctrl+A → F9*: TOC, figure numbers, page numbers), accept/clear tracked changes, remove comments, check *File → Info → Inspect Document*.
- PDF: *File → Save As → PDF*, *Best for publishing*, *Create bookmarks using headings* ON, *Document structure tags for accessibility* ON.
- File name: `SmartCo – <Title> – <Month YYYY>.pdf` (e.g. `SmartCo – The Delivery Intelligence Gap – June 2026.pdf`).
- Document properties (*File → Info*): Title, Author(s), Company = SmartCo.
- Template: `templates/document/SmartCo-Document.dotx` (generated by `build-dotx.js`) — theme (§2), all styles (§3), page setup (§1), header/footer (§9) and a sample document showing the cover, TOC, sections, callouts, stat pair, stage cards, table, figure caption, endnotes, about and back page. Replace the bracketed placeholders; delete sample blocks you don't need. `SmartCo-Document.dotx` contains placeholders in [square brackets] only. `SmartCo-Document-sample.docx` is a regular document with the same structure and real examples (authors, contacts, boilerplate) for reference.

## 13. Checklist before sending

- [ ] Started from SmartCo template; no direct formatting; no highlighted words in headings
- [ ] Only Roboto 400/600/700; fonts embedded
- [ ] Only core colors + the 5 document tints; no Office default theme colors
- [ ] No accent-colored text; stat blocks only on `primary` or `accent-2`
- [ ] Max 1 accent per page (except §6.2 stage coding)
- [ ] Body left-aligned; no manual bullets; no empty paragraphs except one `Callout Spacer` after each callout / stat row
- [ ] No `Overline`; ALL CAPS only in `Eyebrow`
- [ ] Figures numbered and captioned; alt text set
- [ ] TOC and fields updated; single copyright line
- [ ] Spell-checked; quotes and dashes normalised

## 14. Changelog

- 0.27 — 2026-10-20 — All document text `neutral-700` → `neutral-900`; cover hexagon position H 12.97 cm / V 22.13 cm.

- 0.26 — 2026-10-19 — `Eyebrow`: limit of one per page removed.

- 0.26 — 2026-10-19 — `Eyebrow`: no per-page limit.

- 0.25 — 2026-10-19 — Template holds placeholders only; real examples moved to the sample file.

- 0.24 — 2026-10-08 — Author contact block: round 2.25 cm photo, `Author Name`, `Author Role` (`primary`), `Author Contact` (9 pt italic #404040).

- 0.23 — 2026-10-08 — Contact and About the authors format (§4); sample file filled with real author examples.

- 0.22 — 2026-10-05 — Roboto (6 styles) embedded in the template and sample file.

- 0.21 — 2026-10-05 — Callouts: quoted text “…” bold via `Callout Quote`.

- 0.20 — 2026-10-02 — Cover authors line in `Caption`.

- 0.19 — 2026-10-02 — `Callout Spacer` style: the only allowed empty paragraph, one after each callout / stat row, 12 pt after.

- 0.18 — 2026-10-02 — `Endnote Entry` added to the style map (§3.1).

- 0.17 — 2026-10-02 — Cover hexagon vertical position 22.11 cm.

- 0.16 — 2026-10-02 — Cover hexagon size 8 × 7.53 cm.

- 0.15 — 2026-10-02 — Cover hexagon: Behind Text, fixed position on page, H 10.46 cm / V 22.3 cm from page, 13.16 × 12.39 cm.

- 0.14 — 2026-10-02 — Callout title optional: title = separate first line ≤ 5 words followed by copy; otherwise callout is copy only, no bold line.

- 0.13 — 2026-10-02 — `Eyebrow` color `primary`.

- 0.12 — 2026-10-02 — `Cover Title` back to `neutral-900` (core 1.2 exception rolled back); `Eyebrow` restored; new `Cover Date` style in `primary`.

- 0.11 — 2026-09-30 — `Heading 1` line spacing 1.5 (override of core §4.2).

- 0.10 — 2026-09-30 — No `primary` highlighted words in `Heading 1/2/3`; `Headline Highlight` style removed.

- 0.9 — 2026-09-30 — `Heading 1` bottom rule 4.5 pt `primary` restored from the reference doc.

- 0.8 — 2026-09-30 — Callouts: text `neutral-900`, title in `Callout Lead` (bold), left border 3 pt.

- 0.7 — 2026-09-30 — Callout fills use the stage-card tints (`primary-tint`, `accent-1-tint`, `accent-2-tint`); `*-50` tints removed; callout text back to `neutral-700`.

- 0.6 — 2026-09-30 — Callouts: 50% tint fill (`primary-50`, `accent-1-50`, `accent-2-50`), left border 1 pt, text `neutral-900`.

- 0.5 — 2026-09-30 — Callouts: no fill, 0.5 pt left border rotating `primary` / `accent-1` / `accent-2`; title and text in `Normal`. Removed `Callout Title`, `Callout Text`, `SmartCo Callout Tint`.

- 0.4 — 2026-09-30 — `Caption` restored; `Overline` removed (with `Eyebrow`); cover text after the title is `Normal`; `Cover Title` in `primary` (core 1.2 exception); stat blocks on `primary` / `accent-2` fills (`Key Number Inverse`, `Stat Text`); removed `Cover Subtitle`, `Key Number Accent`, `Key Number XL`.

- 0.3 — 2026-09-30 — `Eyebrow` and `Caption` removed from documents; `Heading 2` 18 pt, `Heading 3` 16 pt; size scale updated; added `Callout Title`, `Card Label`, `Card Label Inverse`.

- 0.2 — 2026-09-30 — Approved overrides: document tints (§10.1), stage color coding (§6.2), document size scale (§3.0). Added Word template.

- 0.1 — 2026-09-30 — Initial rules derived from "AI in Programme Delivery — Campbell & Khan" (June 2026).
