---
file: 00-core.md
brand: SmartCo
version: 1.1
updated: 2026-09-29
owner: Arty
role: Single source of truth. All asset files inherit from this file.
---

# SmartCo — Core

## 0. How to use this file

- Asset files MUST reference tokens by name, never by raw value.
- Asset files MAY override a rule only by listing it under `Overrides:` in their header.
- If an asset file and this file conflict and no override is declared, this file wins.
- MUST = never break. SHOULD = default, break only with a stated reason.

## 1. Brand essence

- **Audience:** WHO_WE_SPEAK_TO
- **Personality:** WORD_1 · WORD_2 · WORD_3
- **Tone of voice:** e.g. Short declarative sentences. No exclamation marks. Plain language over jargon.
- **Visual summary:** e.g. Generous white space, one strong accent per layout, data over decoration.

## 2. Global hard rules

- MUST use only colors defined in section 3.
- MUST use only fonts defined in section 4.
- MUST NOT use gradients, drop shadows, glows or 3D effects.
- MUST NOT stretch, recolor, rotate or add effects to the logo.
- MUST NOT place text on photos without a solid overlay (min 80% opacity).
- SHOULD use max one accent element per layout (either accent-1 or accent-2)

## 3. Color tokens


### 3.1 Brand colors

| Token | Name | HEX | RGB | Use for | Never use for |
|---|---|---|---|---|---|
| `primary` | Brand Navy | #0065FC | 0 101 252 | Highlighted words in Headlines, overline text, key shapes, dark backgrounds, eyebrows | Small body text on white |
| `secondary` | Brand Teal | #43E6A2 | 67 230 162 | Supporting shapes, secondary data series | Any text |
| `accent-1` | Brand Amber | #E65C43 | 230 92 67 | One highlight per layout: key number, CTA, Supporting shapes | Any text except `number` role on `white` (see 3.3) |
| `accent-2` | Brand Sun | #E6D443 | 230 212 67 | One highlight per layout: key number, CTA, Supporting shapes | Any text except `number` role on `white` (see 3.3) |

### 3.2 Neutrals

| Token | HEX | RGB | Use for |
|---|---|---|---|
| `neutral-900` | #000000 | 0 0 0  | Headlines text |
| `neutral-700` | #4D4D4D | 77 77 77 | Body text, caption |
| `neutral-200` | #CCCCCC | 204 204 204 | Borders, table lines |
| `white` | #FFFFFF | 255 255 255 | Main background, Headlines text on primary, text on eyebrows, body text on primary | 

### 3.3 Color rules

- **Proportions (SHOULD):** white + neutrals 70% · primary/secondary 25% · accent ≤ 5%.
- **Contrast (MUST):** text vs background ≥ 4.5:1 (≥ 3:1 for text ≥ 24 px / 18 pt).
- **Approved text/background pairs:**
  - `neutral-900` on `white` / `secondary`/  `accent-1` / `accent-2`
  - `neutral-700` on `white` 
  - `white` on `primary`
  - `primary` on `white` 
  - `accent-1` on `white` — `number` role only, ≥ 24 px / 18 pt (3.5:1)
  - `accent-2` on `white` — `number` role only, ≥ 48 px / 36 pt (see contrast exception below)
- **Contrast exception (brand decision):** `accent-2` on `white` is 1.5:1 — below the contrast rule above.
  Accepted for the `number` role only, at ≥ 48 px / 36 pt. MUST NOT be used for any other text or at smaller sizes.
- **Forbidden text pairs (MUST NOT):**
  - Any accent as text on `primary` (brand decision)
  - Any accent as text other than the `number` role

## 4. Typography

### 4.1 Font families

| Token | Family | Weights allowed | Use for | Fallback |
|---|---|---|---|---|
| `font-heading` | FONT_A | 700 Bold, 600 Semibold | Headlines, big numbers | Roboto Bold, Roboto Semibold |
| `font-body` | FONT_B | 400 Regular, 600 Semibold | Body, captions, tables, UI, eyebrows| Roboto, Roboto Semibold |

- **Font files / source:** LINK_OR_PATH (license: TBD)
- MUST NOT use weights outside the list above.
- Fallback MUST be used in files sent to clients who may not have brand fonts (e.g. editable PPTX).

### 4.2 Type roles

| Role | Font | Weight | Line height | Letter spacing | Case | Use for |
|---|---|---|---|---|---|---|
| `display` | `font-heading` | 700 | 1.2 | 0 | Sentence case | Cover titles, hero headline. Max 1 per layout |
| `h1` | `font-heading` | 700 | 1.2 | 0 | Sentence case | Page / slide title |
| `h2` | `font-heading` | 600 | 1.2 | 0 | Sentence case | Section and block titles |
| `eyebrow` | `font-body` | 400 | 1.5 | 0% | ALL CAPS, max 3 words | Short label directly above a headline: topic or category, e.g. "CASE STUDY", "PRODUCT UPDATE", Short label in primary color box above display |
| `overline` | `font-heading` | 700 | 1.2 | +30% | ALL CAPS | Section marker: section number or name, e.g. "01", "RESULTS". Placed at top of page/slide, not tied to a headline, Job role|
| `body` | `font-body` | 400 | 1.5 | 0 | Sentence case | Paragraphs, bullets |
| `body-strong` | `font-body` | 600 | 1.5 | 0 | Sentence case | Emphasis inside body text, table headers |
| `caption` | `font-body` | 400 | 1.4 | +1% | Sentence case |  Sources, footnotes, image and chart labels |
| `number` | `font-heading` | 700 | 1.0 | −2% | Units in caps (M, K, BN) | Key metrics, big numbers |

### 4.3 Type rules

- **Scale ratio (SHOULD):** each role ≈ 1.25–1.33× the next smaller role.
- MUST NOT use ALL CAPS except `eyebrow`,`overline` .
- MUST NOT center-align body text. Left-align by default.
- Numbers in tables MUST use tabular figures if the font supports them.

## 5. Logo

| Version | File | Use on |
|---|---|---|
| Full color | `logo-color.svg` | `white` |
| White | `logo-white.svg` | `primary`, `secondary`, dark photos with overlay |

- **Clear space:** height of the logomark on all sides.
- **Minimum size:** 120 px wide (screen) / 1 in (print).
- MUST NOT place the logo on `accent-1, accent-2` or on busy image areas.

## 6. Asset files registry

| File | Covers | Status |
|---|---|---|
| `deck.md` | Presentations 16:9 | planned |
| `documents.md` | Word documents: white papers, proposals, reports, sell sheets | active (v0.27) |
| `social.md` | Social posts: LinkedIn 1080×1080 (New joiner, We are hiring, Empty) | active (v0.3) |

## 7. Changelog

- 1.0 — 2026-09-28 — Initial core tokens.
- 1.1 — 2026-09-29 — Both accents allowed for `number` role on `white`; contrast exception for `accent-2`; accent text on `primary` forbidden.
