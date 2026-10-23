---
file: deck.md
brand: SmartCo
version: 0.4
updated: 2026-10-23
status: draft
inherits: 00-core.md v1.1
covers: Presentations 16:9 — sales decks, client proposals, credentials (PowerPoint, Google Slides, PDF, HTML slides)
source: PowerPoint master from the designer's deck "SmartCo Sales Deck Template Final.pptx" (slide master + 23 layouts). Same layout set as Figma "SmartCo-Assets-v2.0", node 6199:2 — https://www.figma.com/design/efBigiaEDHAo8OuE2H4XLU/SmartCo-Assets-v2.0?node-id=6199-2
template: templates/presentation/SmartCo-Deck.potx (PowerPoint master), templates/presentation/Deck.dc.html (HTML)
Overrides:
  - core §4 type sizes — decks use their own size scale (§3). Core defines roles only.
  - core §4.2 line heights — slide title 50.88 pt on 44 pt (1.156); large text (section, contents, quote, side titles) 90%; body and caption text 100%. Core gives 1.2 / 1.5. Reason: as built in the master.
  - core §4.2 role `overline` — the section label is 9 pt Bold ALL CAPS with 0 tracking, not +30%. Reason: as built.
  - core §4.3 scale ratio (SHOULD) — the deck sizes (§3) do not follow a fixed 1.25–1.33 ratio. Reason: as built.
  - core §3.3 neutral-200 for dividers — the footer rule is 1 pt `neutral-900`. Reason: as built.
---

# SmartCo — Presentations

All tokens (`primary`, `secondary`, `accent-2`, `neutral-900`…) are defined in `00-core.md`. Values below come from the PowerPoint master `SmartCo-Deck.potx`. Sizes are given in pt (PowerPoint) and px on the 1920 × 1080 canvas (px = pt × 2). If this file and core conflict, core wins except for the overrides above.

## 0. Before you start

- MUST start every deck from the SmartCo master: `templates/presentation/SmartCo-Deck.potx` in PowerPoint, `Deck.dc.html` for HTML slides (§11). Never start from a blank file or a copy of an old client deck.
- MUST use only the 23 master layouts (§4): *Home → New Slide* / *Layout*. Do not move, resize or recolour the brand shapes; they sit on the layouts. Only the placeholders change per slide.
- MUST use only Roboto: headings Bold 700, body Regular 400 and SemiBold 600 (core §4.1). Emphasis in body text = **Roboto SemiBold**, not *Ctrl+B* (Ctrl+B gives Bold 700). Install Roboto from `fonts/` before editing.
- Editable PPTX sent to clients MUST embed fonts (§10).
- One message per slide. If a slide needs two titles, make it two slides.

## 1. Slide setup

| Setting | Value |
|---|---|
| Aspect ratio | 16:9 |
| PowerPoint size | 33.867 × 19.05 cm (13.333 × 7.5 in, *Widescreen*) |
| Canvas (HTML / Figma) | 1920 × 1080 px |
| Unit conversion | 1 pt in PowerPoint = 2 px on the 1920 canvas |
| Background | `white`, or full-bleed `primary` (Cover B, Section headers, End slide) |

### 1.1 Grid (from the master, px @ 1920)

| Element | Value |
|---|---|
| Left margin | 72 (logo, footer rule); text boxes from 75.6 |
| Right margin | footer rule ends at x 1848 |
| Section label | x 75.6, y 69.3 |
| Slide title | x 75.6, y 104.8; width 1781 (full) or 849 (two-column layouts) |
| Body text | x 76.4; y 304 under a one-line title, y 392–396 under a two-line title; width 487 (full-width layouts) or 847 (two-column layouts) |
| Footer rule | y 982.7, 1 pt `neutral-900`; full width 1776 px, two-column layouts 851.5 px (y 969.8), Contents 1342.5 px |
| Footer logo | x 72, y 1012, 159 px wide |
| Two-column split | text column 75 → 924; right panel from x 993 (fill) or 997 (picture) |

- All text stays inside the margins. Only brand shapes, full-bleed fills and pictures may touch the slide edge.
- Text is left-aligned. MUST NOT centre body text (core §4.3). The only vertically centred text is the Section header A title.

## 2. Theme (PowerPoint: Design → Variants → Colors / Fonts)

### 2.1 Theme colours (as in the master)

| PowerPoint slot | Token | HEX |
|---|---|---|
| Text/Background – Dark 1 | `neutral-900` | #000000 |
| Text/Background – Light 1 | `white` | #FFFFFF |
| Text/Background – Dark 2 | `primary` | #0065FC |
| Text/Background – Light 2 | `secondary` | #43E6A2 |
| Accent 1 | `accent-1` | #E65C43 |
| Accent 2 | `accent-2` | #E6D443 |
| Accent 3 | `primary` | #0065FC |
| Accent 4 | `secondary` | #43E6A2 |
| Accent 5 | `accent-1` | #E65C43 |
| Accent 6 | `accent-2` | #E6D443 |
| Hyperlink | `primary` | #0065FC |
| Followed hyperlink | `primary` | #0065FC |

- Layouts use Dark 2 (`primary`) for blue fills and Light 2 (`secondary`) for green fills.
- New charts and SmartArt start with Accent 1 (`accent-1`). Recolour series to `primary` / `secondary` first (§6): `accent-1` is never a fill in decks.
- `neutral-700` and `neutral-200` are not theme slots. Use them as custom colours (#4D4D4D, #CCCCCC) only where §6 allows.

### 2.2 Theme fonts

| Slot | Family | Token |
|---|---|---|
| Headings | Roboto (Bold in all title styles) | `font-heading` |
| Body | Roboto | `font-body` |
| Body emphasis | Roboto SemiBold (600) | `body-strong` |

## 3. Type scale (deck only)

| Token | Core role | pt | px @ 1920 | Weight | Line spacing | Used in |
|---|---|---|---|---|---|---|
| `deck-contents` | `display` | 80 | 160 | 700 | 90% | Contents title |
| `deck-section` | `display` | 70 | 140 | 700 | 90% | Section header A |
| `deck-quote` | `display` | 50 | 100 | 700 | 90% | Quote text |
| `deck-title` | `h1` | 44 | 88 | 700 | 50.88 pt | Slide title, Meet the team |
| `deck-side-title` | `h2` | 30 | 60 | 700 | 90% | "What our clients say", "Your SmartCo Lead" |
| `deck-list` | `body` | 24 | 48 | 400 | 90% | Contents list |
| `deck-tagline` | `body` | 23 | 46 | 400 | 100% | Cover tagline |
| `deck-end-tagline` | `body-strong` | 18 | 36 | 600 | 100% | End slide tagline |
| `deck-intro` | `body` | 17 | 34 | 400 | 100% | Body level 1: intro / lead paragraph |
| `deck-source` | `caption` | 15 | 30 | 400 | 90% | Quote source |
| `deck-meta` | `caption` | 14 | 28 | 400 / 600 | 100% | Strapline (400), presenter + date (600), team-card name (600) |
| `deck-contact` | `caption` | 12.43 | 24.86 | 600 | 100% | Email · website line |
| `deck-body` / `deck-body-strong` | `body` / `body-strong` | 12 | 24 | 400 / 600 | 100% | Body levels 2–4, lead columns, team cards |
| `deck-label` | `overline` | 9 | 18 | 700 | 90% | Section label, typed in ALL CAPS |

- MUST NOT use sizes outside this table.
- Weights: 700 only for `display`, `h1`, `h2` and `deck-label`; 600 only for `body-strong` roles; everything else 400.
- **Body placeholder levels** (Template 1–9, two-column layouts, Quote client, Quote lead name block):

| Level | Style | Use |
|---|---|---|
| 1 | `deck-intro` 17 pt, 400 | Intro paragraph |
| 2 | `deck-body-strong` 12 pt, 600 | Lead-in / bold body copy |
| 3 | `deck-body` 12 pt, 400 | Body copy |
| 4 | `deck-body` 12 pt, 400, "•" bullet | Bullets |

  Change level with *Tab* / *Shift+Tab*. Bullets come from level 4, never typed.
- ALL CAPS only in `deck-label` (core §4.3). Everything else is sentence case.
- Headline highlight (core §3.1): one phrase of a `deck-title` MAY be `primary` on `white`. Never the whole line; never on `primary` backgrounds.
- `number` role (key metrics) has no placeholder. When needed, use 50 pt or larger, Bold, in `neutral-900` or `primary`. `accent-2` numbers MUST be ≥ 48 pt / 96 px, `accent-1` ≥ 24 pt (core §3.3), on `white` only.

## 4. Master layouts

23 layouts. Pick by content; do not invent new arrangements. Names are as in the PowerPoint master; `variant` = the switch in `Deck.dc.html`.

| # | PowerPoint layout | `variant` | Background | Use for |
|---|---|---|---|---|
| 01 | Cover A | `cover-a` | `white` + hexagon (`primary` over `secondary`) | Default cover |
| 02 | Cover A v2 | `cover-a-v2` | `white` + right-half picture | Cover with a photo |
| 03 | Cover B | `cover-b` | `primary` + hexagon (`white` over `secondary`) | Dark cover |
| 04 | Cover B v2 | `cover-b-v2` | `primary` + right-half picture | Dark cover with a photo |
| 05 | Partnership | `partnership` | left half `primary`, hexagon "×" | SmartCo × client |
| 06 | Section Header A | `section-header-a` | `primary` + `secondary` hexagon | Start of a section (title only) |
| 07 | Contents | `contents` | `white` + `primary` / `secondary` bands | Agenda, ≤ 5 items |
| 08 | Full page image placeholder | `full-image` | picture | Full-bleed photo |
| 09 | Template 1 | `template-1` | `white` | One-line title + text; charts, tables |
| 10 | Template 2 | `template-2` | `white` + bottom-right `primary` / `secondary` shapes | One-line title + text |
| 11 | Template 3 | `template-3` | `white` | Two-line title + text; charts, tables |
| 12 | Template 4 | `template-4` | as Template 2 | Two-line title + text |
| 13 | Template 5 - 2 column with image | `two-column-image` | `white` + picture on the right | Text + photo |
| 14 | Template 6 - 2 column solid colour ight | `two-column-blue` | right half `primary` | Text + content on blue |
| 15 | Template 6 - 2 column Green | `two-column-green` | right half `secondary` | Text + content on green |
| 16 | Template 7 - Alternate Graphic A | `alternate-graphic-a` | `secondary` + `primary` shapes, right | One-line title + text |
| 17 | Template 8 - Alternate Graphic B | `alternate-graphic-b` | `secondary` + `primary` shapes, bottom-right | Two-line title + text |
| 18 | Template 9 - Delivery Yellow | `delivery-yellow` | `accent-2` triangle, bottom-right | Delivery / timeline content. Counts as the slide's one accent |
| 19 | Quote template | `quote` | left `white`, right `primary` with `secondary` quote marks | Client testimonial |
| 20 | 1_Quote template | `quote-lead` | left `white`, right `primary` | "Your SmartCo Lead": portrait, name, two text columns |
| 21 | 1_Section Header A | `section-header-b` | `primary` + white hexagon with client logo | Section start with title + client logo; client stories |
| 22 | Meet the Team | `meet-the-team` | `white` + `secondary` / `primary` corners | Up to 4 people |
| 23 | End Slide | `end` | `primary` + hexagon | Closing slide |

### 4.1 Covers (01–04)

| Element | Cover A / B (01, 03) | Cover v2 (02, 04) |
|---|---|---|
| Logo (on the layout) | x 72, y 262, 852 px wide | x 72, y 180, 663 px wide |
| Tagline `deck-tagline` | placeholder at y 525 (editable; default "Your Digital Enablement Partner / for Complex Change") | fixed text at y 396 |
| Strapline `deck-meta` 400 | placeholder, y 678 | placeholder, y 549 |
| Presenter + date `deck-meta` 600 | placeholder, y 783: "Presenter Name   \|   Date" | placeholder, y 654 |
| Contact `deck-contact` | fixed, right, x 1353, y 1019 | fixed, left, x 70, y 1019 |
| Picture | — | placeholder 1013.5 × 1080 at x 906.5 (right half, full bleed) |
| Accreditation badges | — | fixed on the layout |

- Text colour: `neutral-900` on `white`, `white` on `primary`.
- Keep the brand tagline on Cover A / B unless the deck has an approved alternative.
- No footer and no slide number on covers.

### 4.2 Partnership (05)

- Left half `primary` with the white logo (fixed). A `white` / `primary` hexagon with "×" sits on the split.
- Client logo placeholder 552 × 332 at x 1153, y 371 on `white`. Full-colour client logo, no larger than the SmartCo logo.

### 4.3 Section headers (06, 21)

- **06 Section Header A:** one placeholder, `deck-section` `white`, ≤ 2 lines, vertically centred, x 66, width 976. No label, no body, no footer.
- **21 1_Section Header A** (Section header B): `deck-label` + `deck-title` in `white` (width 1134). Client logo placeholder 367 × 226 at x 1420, y 69 inside the white hexagon. No footer. Also the base for client stories (title, challenge / what we delivered, quote).

### 4.4 Contents (07)

- Title placeholder `deck-contents` ("Contents" or "Agenda") at x 74, y 271.
- List placeholder `deck-list`, one item per line, max 5 items, at x 70, y 489.
- Footer: logo + short rule (1342.5 px), so the rule stops before the shapes.

### 4.5 Content slides (09–18)

1. Section label `deck-label`, typed in ALL CAPS, x 75.6, y 69.3 (e.g. "OUR APPROACH").
2. Title `deck-title`, sentence case, a takeaway, not a topic. One line in 09 / 10 / 16; two lines in 11–15, 17, 18.
3. Body placeholder (§3 levels) at x 76.4, width 487 (09–12, 16–18) or 847 (13–15).
4. Footer (§5).

- Max 5 bullets, ≤ 12 words each, or ≤ 60 words of running text in the body placeholder. Denser content (tables, cards, timelines) goes on 09 / 11, which have no shapes.
- 10, 12, 16, 17 and 18 carry corner shapes. No text, charts or tables over the shapes.
- 13: picture placeholder 850 × 915 at x 997, y 65.
- 14 / 15: right panel from x 993, no placeholder. On 14 (`primary`) all text is `white`; on 15 (`secondary`) all text is `neutral-900` (core §3.3).
- 18 uses `accent-2`, so it counts as the slide's one accent: no other accent element on that slide.

### 4.6 Quote (19)

- Left column: "What our clients say" — fixed `deck-side-title` on the layout. Client placeholder (body levels, §3) at x 76, y 396, width 324.
- Right panel `primary` from x 478.
- Quote placeholder `deck-quote` `white`, ≤ 25 words, x 728, y 118, width 943.
- Source placeholder `deck-source` `white` at y 827.
- Quote marks: the `secondary` slashes on the layout. Do not type quotation marks in the quote text.
- Footer logo only, no rule.

### 4.7 Quote lead (20, "1_Quote template")

- Left column: "Your SmartCo Lead" — fixed `deck-side-title` on the layout.
- Portrait placeholder 175 px square at x 96, y 244, inside a `primary` frame.
- Name block placeholder (body levels: name and job title at level 2, text at level 3) at x 73, y 499.
- Right panel `primary` from x 674. Two text placeholders in `deck-body` `white` at x 786 and x 1342: column 1 level 1 is `deck-body-strong` (headings), column 2 has bullets at level 3.
- Footer logo only, no rule.

### 4.8 Meet the team (22)

- "Meet the team" — fixed `deck-title` on the layout.
- 4 white cards with a light stroke, at x 77 / 531 / 977 / 1431; portrait placeholder 131 px square inside a 175 px `primary` frame on top of each card.
- Card text placeholder: level 1 name `deck-meta` 600, level 2 role `deck-body`, level 3 bullets, level 4 quote line `deck-body-strong`.
- Same photo crop and treatment for every person (head and shoulders, face centred). For fewer than 4 people, delete the extra cards' content and leave the placeholders empty; do not resize cards.

### 4.9 End slide (23)

- `primary` background, hexagon top-right, white logo, all fixed on the layout.
- Tagline `deck-end-tagline` `white` "Your Digital Enablement Partner for Complex Change." at y 334.
- Contact `deck-contact` `white` bottom-right. No placeholders.

### 4.10 Full page image (08)

- Picture placeholder fills 1920 × 1080. If text is needed on it, use a solid overlay ≥ 80% (core §2) and the white logo only.

## 5. Footer (content slides)

| Element | Style | Position |
|---|---|---|
| Rule | 1 pt `neutral-900` | y 982.7, x 72–1848; two-column layouts y 969.8, 851.5 px; Contents 1342.5 px |
| Logo | colour logo (PNG on the layout), 159 px wide (≥ 120 px, core §5) | x 72, y 1012 |

- On: Contents, Templates 1–9, two-column layouts, Meet the team. Logo only (no rule): Quote, Quote lead.
- Off: covers, Partnership, Section headers, Full page image, End slide.
- No slide numbers in the master.

## 6. Colour on slides

- Proportions (core §3.3): ~70% `white` / neutrals, ~25% `primary` / `secondary`, ≤ 5% accent. Full-`primary` slides (covers, section headers, end) are the brand exception and balance across the deck.
- Accent: only `accent-2`, only in 18 Delivery Yellow, as a shape. `accent-1` MUST NOT be used as a fill in decks (including charts, §2.1). Either accent MAY be used as a key `number` on `white` (core §3.3), max one per slide.
- Text: `neutral-900` on `white` / `secondary`; `white` on `primary`; `primary` on `white` for the contact line, links and the headline highlight. Accents and `secondary` are never text, except the `number` role on `white`.
- MUST NOT: gradients, shadows, glows, 3D, tints, transparency (except ≥ 80% photo overlays).

## 7. Images and logos

- Pictures fill their placeholder edge to edge (crop, never stretch). No borders, rounded corners or shadows.
- Text on a photo needs a solid overlay ≥ 80% opacity (`neutral-900` or `primary`). Logo on photos: white logo only, on the overlay.
- Client logos: full colour on `white` only (Partnership, Section header B). Never larger than the SmartCo logo on the same slide.
- Brand shapes, logos and accreditation badges live on the layouts. MUST NOT be copied onto slides, redrawn, recoloured, rotated or resized.

## 8. Motion

- Slide transitions: none, or *Fade* ≤ 0.3 s.
- Object animations: *Appear* or *Fade* only, for step-by-step builds. No fly-ins, bounces, spins or zooms.

## 9. Copy

- UK English ("programme", "optimisation"), sentence case, no exclamation marks, no emoji (core §1).
- Titles are takeaways, not topics ("Reporting time fell each month", not "Reporting time").
- Numbers: numerals for 10+ and all percentages ("70%"); units in caps (12.4M, 3.2BN, 850K).
- Dashes: spaced em dash " — " for breaks; en dash without spaces for ranges ("2024–2026"). No space before a colon.
- Contact line exactly: "enquiries@smart-co.co.uk · smart-co.co.uk".
- Speaker notes carry the detail; the slide carries the message.

## 10. Export and handoff

- PDF for external recipients by default. PPTX only when the client must edit: *File → Options → Save → Embed fonts* ON, *Embed only the characters used* OFF.
- HTML: export each slide at 1920 × 1080 (PNG) or print to PDF at 16:9.
- File name: `SmartCo – <Title> – <Month YYYY>.pdf` (same pattern as documents).
- Before export: empty placeholders deleted, hidden / unused slides removed, comments deleted, speaker notes checked for internal content, *Inspect Presentation* run.
- Alt text on every picture, logo and chart.

## 11. Template

### 11.1 PowerPoint

- `templates/presentation/SmartCo-Deck.potx` — the master: slide master + 23 layouts from the designer's deck "SmartCo Sales Deck Template Final.pptx"; slides, notes, SharePoint metadata and add-ins removed. Double-click to start a new deck, or *Design → Browse Themes* to apply it to an existing one.
- Fixes applied on import (`import-master.py`):
  - colour codes: `0064FB` → `0065FC` (`primary`), `43E6A1` → `43E6A2` (`secondary`), `E6D343` → `E6D443` (`accent-2`) in the theme, master, layouts and SVGs — placement of colours unchanged;
  - theme fonts Aptos Display / Aptos → Roboto; Calibri → Roboto;
  - body-font bold (≤ 18 pt, except the 9 pt section label) → Roboto SemiBold 600; headings stay Bold 700;
  - Followed hyperlink `secondary` → `primary`;
  - the notes master uses the same SmartCo theme.
- Logos on the layouts are PNG in the brand colours (`0065FC`, `000000`, `FFFFFF`).
- To update after the designer changes the deck: `python3 import-master.py "<deck>.pptx" SmartCo-Deck.potx`.

### 11.2 HTML

- `templates/presentation/Deck.dc.html` — all 23 layouts at 1920 × 1080, same positions and type scale as the master. Set `variant` to one layout (§4) or `all`.
- `templates/presentation/assets/` — brand shapes and quote marks as SVG, exported from Figma, colours normalised to core. The logo comes from `assets/logo-color.svg` / `logo-white.svg`.
- `build-deck.py` — builds `Deck.dc.html` (`python3 build-deck.py Deck.dc.html`).

## 12. Checklist before sending

- [ ] Built from the SmartCo master; brand shapes untouched
- [ ] Only Roboto: 700 headings, 400 / 600 body; emphasis in SemiBold, not Ctrl+B; only sizes from §3; fonts embedded
- [ ] Only core colours; no tints; charts recoloured away from `accent-1`
- [ ] Max one accent per slide; `accent-2` shape only on Delivery Yellow
- [ ] Titles are sentence-case takeaways; ALL CAPS only in the section label
- [ ] Body left-aligned; bullets from level 4; ≤ 5 bullets; nothing over the corner shapes
- [ ] No empty placeholders; pictures cropped, not stretched
- [ ] Every number has a source line
- [ ] Text on photos has ≥ 80% overlay
- [ ] No gradients, shadows, glows, fly-in animations
- [ ] Alt text set; spell-checked (UK English); no exclamation marks

## 13. Open questions

- Slide numbers: not in the master. Add them or keep none?
- Key-number / stats, table, timeline and client-story layouts exist only as slides in the designer's deck, not as master layouts. Add them as layouts?
- Layout names in the master ("1_Quote template", "1_Section Header A", "…solid colour ight"): rename?
- Fix the off-palette codes in the Figma file and the designer's deck at source (§11.1).

## 14. Changelog

- 0.4 — 2026-10-23 — Aligned to the PowerPoint master: theme colour slots, type scale in pt (body levels 17 / 12 pt, line spacing 100% / 90%), layout names and placeholders, footer 1 pt. Body emphasis Roboto SemiBold 600 (core §4.1); followed hyperlink `primary`.
- 0.3 — 2026-10-23 — PowerPoint master `SmartCo-Deck.potx` imported from the designer's deck (master + 23 layouts; colour codes and theme fonts fixed).
- 0.2 — 2026-10-23 — Rebuilt from the Figma masters (node 6199:2): 23 layouts, positions and type scale, template `Deck.dc.html` + SVG shapes.
- 0.1 — 2026-10-23 — Initial draft derived from core v1.1; no source deck.
