---
file: deck.md
brand: SmartCo
version: 0.1
updated: 2026-10-23
status: draft
inherits: 00-core.md v1.1
covers: Presentations 16:9 — PowerPoint (.pptx), Google Slides, PDF handouts, HTML slides
source: none yet — no deck template, Figma file or reference deck supplied. All values below are derived from core and marked *proposed* where core is silent.
template: TBD (templates/presentation/ — planned)
Overrides:
  - core §4 type sizes — presentations use their own size scale (§3). Core defines roles only.
---

# SmartCo — Presentations

All tokens (`primary`, `secondary`, `neutral-900`, `h1`, `body`…) are defined in `00-core.md`. This file only maps them onto slides. If this file and core conflict, core wins except for the overrides above.

> **Draft.** No source deck exists. Everything not taken directly from core is *proposed* and needs brand approval before v1.0. Registered in core §6 as `deck.md`.

## 0. Before you start

- MUST start every new deck from the SmartCo slide master (when it exists, see §11), never from a blank file or a copy of an old client deck.
- MUST build slides from the master layouts (§4). Do not move, resize or recolor placeholders by hand.
- MUST use only core colors and Roboto 400 / 600 / 700. Editable PPTX sent to clients MUST either embed fonts or fall back to Roboto (core §4.1).
- One message per slide. If a slide needs two headlines, it is two slides.

## 1. Slide setup

| Setting | Value |
|---|---|
| Aspect ratio | 16:9 |
| Canvas (HTML / design) | 1920 × 1080 px |
| PowerPoint size | 33.867 × 19.05 cm (13.333 × 7.5 in, *Widescreen*) |
| Unit conversion | 1 pt in PowerPoint = 2 px on the 1920 canvas |
| Background | `white` (default) or solid `primary` (cover, section divider, closing) |

### 1.1 Grid and margins (*proposed*)

| Element | px @ 1920 | Token |
|---|---|---|
| Left / right margin | 128 | `--space-10` |
| Top margin | 96 | `--space-9` |
| Bottom margin (above footer) | 96 | `--space-9` |
| Columns | 12, gutter 32 | `--space-6` |
| Content width | 1664 | — |

- All text and objects stay inside the margins. Only full-bleed images and solid background blocks may touch the slide edge.
- Content is left-aligned to the grid. MUST NOT center body text (core §4.3). Display titles on the cover MAY be left-aligned only.

## 2. Theme (PowerPoint: Design → Variants → Colors / Fonts)

### 2.1 Theme colors

| PowerPoint slot | Token | HEX |
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

- Charts and SmartArt read Accent 1 → 6 in order. The order above gives `primary` first, `secondary` second, then accents — which matches core's proportions (§3.3).

### 2.2 Theme fonts

| Slot | Family | Token |
|---|---|---|
| Headings | Roboto Bold | `font-heading` |
| Body | Roboto | `font-body` |

## 3. Type scale (presentations only)

Based on the proposed 1.333 scale in `tokens/typography.css`, ×2 for the 1920 canvas (`--type-deck-multiplier`). Values in pt are the same numbers as the base-16 px tokens.

| Role (core §4.2) | px @ 1920 | pt in PowerPoint | Weight | Line height | Tracking | Case |
|---|---|---|---|---|---|---|
| `display` | 76 | 38 | 700 | 1.2 | 0 | Sentence |
| `number` | 100+ | 50+ | 700 | 1.0 | −2% | Units in caps |
| `h1` (slide title) | 56 | 28 | 700 | 1.2 | 0 | Sentence |
| `h2` | 42 | 21 | 600 | 1.2 | 0 | Sentence |
| `body` / `body-strong` | 32 | 16 | 400 / 600 | 1.5 | 0 | Sentence |
| `eyebrow` | 28 | 14 | 400 | 1.5 | 0 | ALL CAPS, ≤ 3 words |
| `overline` | 28 | 14 | 700 | 1.2 | +30% | ALL CAPS |
| `caption` | 24 | 12 | 400 | 1.4 | +1% | Sentence |

- MUST NOT use sizes below `caption` (24 px / 12 pt). Body text below 32 px / 16 pt only in tables and chart labels.
- `number` with `accent-2` MUST stay ≥ 96 px / 48 pt (core §3.3 exception: ≥ 48 px at base, ×2 on the deck canvas). `accent-1` numbers ≥ 48 px / 24 pt.
- One `display` per slide (core §4.2). `display` is used on the cover and section dividers only; content slides use `h1`.
- Headline highlight: one phrase of an `h1` / `display` MAY be set in `primary` on `white` ("Data that makes *decisions easier*"). Never the whole line; never on `primary` backgrounds.

## 4. Layouts

Use only these layouts. Pick by content; do not invent new arrangements without adding them here.

| # | Layout | Use for | Background |
|---|---|---|---|
| 1 | **Cover** | First slide | `primary` |
| 2 | **Agenda** | List of sections | `white` |
| 3 | **Section divider** | Start of each section | `primary` |
| 4 | **Title + content** | Default slide: headline + bullets / text | `white` |
| 5 | **Two columns** | Comparison, text + image, before / after | `white` |
| 6 | **Key number** | One big metric with explanation | `white` |
| 7 | **Stats row** | 2–4 metrics side by side | `white` |
| 8 | **Chart / table** | Data slide | `white` |
| 9 | **Quote** | Client or expert quote | `white` or `secondary` block |
| 10 | **Team** | People with photo, name, role | `white` |
| 11 | **Closing / contact** | Last slide: thank you + contact | `primary` |

### 4.1 Cover

| Element | Role / style | Position (*proposed*) |
|---|---|---|
| Logo | `logo-white.svg`, 320 px wide | top-left at margins (128 / 96) |
| Eyebrow | `eyebrow` in `white` (deck type: "CLIENT PROPOSAL", "WEBINAR") | above title |
| Title | `display` in `white`, ≤ 8 words, ≤ 2 lines | left, vertically centered |
| Subtitle | `body` in `white`, ≤ 1 line | under title, gap 32 px |
| Date / client | `caption` in `white` ("October 2026 · Client name") | bottom-left at margins |
| Brand graphic | `assets/brand-hexagons.png`, bottom-right, may bleed off edge | behind text, never under the title |

- No footer, no slide number.

### 4.2 Agenda

- `h1` "Agenda" (or a sentence-case title).
- Numbered list: section number as `overline` in `primary` ("01"), section name in `h2` `neutral-900`. Max 6 items.

### 4.3 Section divider

- `overline` in `white` with the section number ("02") at top-left.
- Section title in `display` `white`, ≤ 6 words.
- Optional one-line `body` intro in `white`.
- No accent elements, no stats.

### 4.4 Title + content

- `overline` (section name, `primary`) at top, optional.
- `eyebrow` directly above the title, optional.
- `h1` slide title: a full-sentence takeaway, ≤ 2 lines ("Reporting time fell each month", not "Reporting time").
- Body: max 5 bullets, ≤ 12 words each, or ≤ 60 words of running text. Bullets MUST come from the placeholder's list style, not typed characters.
- Bullet marker: square or en dash in `primary` (*proposed*).

### 4.5 Two columns

- Columns 6 + 6 or 5 + 7 on the 12-column grid. Column titles in `h2`.
- Image column: image fills the column edge-to-edge (may bleed to the slide edge on the outer side). No borders, no rounded corners, no shadows.

### 4.6 Key number

- `number` (100–200 px) in `neutral-900`, `primary`, or one accent (counts as the slide's one accent).
- One line of `body` under it: what it measures.
- `caption` source line at the bottom: "Source: SmartCo internal data, Q3 2026."

### 4.7 Stats row

- 2–4 stat blocks, equal width. Each: `number` + ≤ 15 words of `body`.
- Fills: `white` with 1 px `neutral-200` hairline, solid `primary` (text `white`), or solid `secondary` (text `neutral-900`). Max one block in an accent fill / accent number per slide.
- MUST NOT: accent numbers on `primary` fills (core §3.3).

### 4.8 Chart / table

- `h1` states the insight; chart shows it. Source line in `caption`.
- Charts: series colors in order `primary`, `secondary`, `neutral-700`, `neutral-200`; highlight one series or bar in one accent if needed. No 3D, no gradients, no shadows, no chart borders.
- Gridlines 1 px `neutral-200`; axis labels `caption` in `neutral-700`; data labels in `neutral-900`.
- Tables: 2 px `neutral-900` top rule, 1 px `neutral-200` row lines, header row `body-strong`, numbers right-aligned with tabular figures. No fills except an optional `secondary` header row. Max 7 rows × 6 columns per slide.

### 4.9 Quote

- Quote in `h2` `neutral-900`, ≤ 30 words, with curly quotes “…”.
- Attribution in `caption`: name, role, company.
- Optional `secondary` solid block behind the quote (text stays `neutral-900`).

### 4.10 Team

- 2–6 people per slide, one row. Photos square, same size and crop for all, head-and-shoulders, background consistent.
- Name `body-strong` `neutral-900`; role `caption` in `primary`.

### 4.11 Closing / contact

- `display` in `white` (e.g. "Thank you" or the deck's key takeaway — no exclamation mark).
- Contact lines in `body` `white`: name, email, website without "https://".
- `logo-white.svg` bottom-left.

## 5. Footer and slide numbers (content slides)

| Element | Style | Position (*proposed*) |
|---|---|---|
| Logo | `logo-color.svg`, 240 px wide (≥ 120 px min, core §5) | bottom-left, inside margins |
| Slide number | `caption` `neutral-700` | bottom-right |
| Confidentiality / deck title (optional) | `caption` `neutral-700` | bottom, after logo |

- No footer on cover, section dividers and closing slide.
- Logo clear space = height of the logomark on all sides (core §5).

## 6. Color on slides

- Proportions (core §3.3): ~70% `white` / neutrals, ~25% `primary` / `secondary`, ≤ 5% accent.
- Max one accent element per slide: a key number, a CTA, or a supporting shape — `accent-1` *or* `accent-2`, not both.
- Text pairs: only the approved pairs in core §3.3. On `primary` slides all text is `white`.
- `secondary` is never text. Accent colors are text only in the `number` role on `white`.
- MUST NOT: gradients, shadows, glows, 3D, transparency (except ≥ 80% photo overlays), tints.

## 7. Images and icons

- Text on a photo needs a solid overlay ≥ 80% opacity (`neutral-900` or `primary`). Logo on photos only in `logo-white.svg`, on the overlay.
- Images: no text burned in, no stock watermarks, no other brand's logo larger than the SmartCo logo.
- Icons: one style per deck, single color (`primary` or `neutral-900`), flat line or filled. No multicolor icons, no emoji.
- Brand hexagons (`assets/brand-hexagons.png`): cover, section dividers and closing only. MUST NOT be redrawn, recolored or rotated.

## 8. Motion

- Slide transitions: none, or *Fade* ≤ 0.3 s.
- Object animations: *Appear* or *Fade* only, for step-by-step builds. No fly-ins, bounces, spins or zooms.

## 9. Copy

- UK English, sentence case, no exclamation marks, no emoji (core §1).
- Titles are takeaways, not topics.
- Numbers: numerals for 10+ and all percentages ("70%"); units in caps (12.4M, 3.2BN, 850K).
- Dashes: spaced em dash " — " for breaks; en dash without spaces for ranges ("2024–2026").
- Speaker notes carry detail; the slide carries the message.

## 10. Export and handoff

- PDF for external recipients by default; PPTX only when the client must edit. PPTX: *File → Options → Save → Embed fonts* ON, *Embed only the characters used* OFF.
- File name: `SmartCo – <Title> – <Month YYYY>.pdf` (same pattern as documents).
- Before export: remove hidden / unused slides, delete comments, check speaker notes for internal content, run *Inspect Presentation*.
- Alt text on every image and chart.

## 11. Template (planned)

- `templates/presentation/SmartCo-Deck.potx` — slide master with theme (§2), layouts (§4), footer (§5).
- `templates/presentation/Deck.dc.html` — HTML preview of all layouts at 1920 × 1080.
- Not built yet. Until it exists, build slides from the rules above and the tokens in `tokens/`.

## 12. Checklist before sending

- [ ] Built from the SmartCo master (or tokens, until it exists); no manual placeholder edits
- [ ] Only Roboto 400 / 600 / 700; fonts embedded or Roboto fallback
- [ ] Only core colors; no Office default theme colors, no tints
- [ ] Max one accent per slide; no accent text except `number` on `white`
- [ ] One `display` per slide; titles are sentence-case takeaways
- [ ] Body left-aligned; ≤ 5 bullets per slide; no text below 24 px / 12 pt
- [ ] ALL CAPS only in `eyebrow` and `overline`
- [ ] Every number has a source line; charts flat, no 3D
- [ ] Text on photos has ≥ 80% overlay
- [ ] No gradients, shadows, glows, fly-in animations
- [ ] Alt text set; spell-checked; no exclamation marks

## 13. Open questions

- Approve the type scale (§3), grid and margins (§1.1) and footer (§5) — all proposed, not in core.
- Bullet marker style (§4.4).
- Is there an existing SmartCo deck or Figma file to take exact values from?

## 14. Changelog

- 0.1 — 2026-10-23 — Initial draft derived from core v1.1; 11 layouts; no source deck.
