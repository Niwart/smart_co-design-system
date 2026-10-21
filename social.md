---
file: social.md
brand: SmartCo
version: 0.2
updated: 2026-10-19
inherits: 00-core.md v1.1
covers: Social media posts — LinkedIn square (1080 × 1080 px)
source: Figma "Social Templates.fig" (page Design: SmartCo-LI-New_Joiner 1:56, SmartCo-LI-We_are_hiring 1:3, SmartCo-LI-empty 1:32); original link https://www.figma.com/design/efBigiaEDHAo8OuE2H4XLU/SmartCo-Assets-v2.0?node-id=6192-236
template: templates/social/SocialPost.dc.html
Overrides:
  - core §4.1 weights 400/600/700 — social posts also use Roboto **500 Medium** (job title) and **900 Black** (welcome label). Reason: as designed in the Figma file. Fonts shipped in fonts/.
  - core §4.3 ALL CAPS ≤ 3 words / eyebrow role — social labels `post-label` and `post-role` are ALL CAPS with wide tracking (as designed).
  - core §2 "max one accent per layout" (SHOULD) — the New joiner post uses `accent-2` hexagon together with `primary` + `secondary`. Reason: as designed.
---

# SmartCo — Social posts

All tokens (`primary`, `secondary`, `accent-2`, `neutral-900`…) are defined in `00-core.md`. Values below are copied from the Figma file; px at 1080 × 1080. If this file and core conflict, core wins except for the overrides above.

## 1. Format

| Setting | Value |
|---|---|
| Canvas | 1080 × 1080 px, `white` background, content clipped to canvas |
| Platform | LinkedIn feed (square) |
| Safe margin | 72 px left / top (logo and text column start here) |
| Export | PNG, 1080 × 1080 (2× = 2160 × 2160 for high-density) |

## 2. Layouts

Three layouts only. Pick by content; do not invent new arrangements.

| Layout | Use for | Figma node |
|---|---|---|
| **New joiner** | Welcoming a new hire (photo + name + role) | 1:56 |
| **We are hiring** | Job vacancy (tag + role title + details + CTA) | 1:3 |
| **Empty** | Any other announcement — same frame, free text area | 1:32 |

### 2.1 Fixed elements (all layouts)

- **Logo** — `assets/logo-color.svg`, 288 × 72 px at x 72, y 72. Never on accent shapes, never resized below 288 px wide on this canvas.
- **Hexagon shapes** — flat hexagons (same geometry as the brand hexagon). Copy them from the template; MUST NOT be redrawn, recolored, or rotated differently.
  - Bottom-left pair (New joiner / We are hiring): `primary` 704 × 814 at x −66, y 760 with shadow −31 / −30 px, blur 119.5, black 11%; `secondary` 564 × 652 at x −295, y 732 in front, shadow −31 / 182 px, blur 119.5, black.
  - Bottom-left pair (Empty): clipped to 608 × 374 at y 706; `primary` at x −96, y 734 (no shadow); `secondary` at x −325, y 706.
  - Top-right (We are hiring / Empty): `primary` 564 × 652 rotated (matrix 0.808, 0.589, −0.589, 0.808), clipped to 375 × 282 at x 705, y 0.
  - Top-right (New joiner): `accent-2` 829 × 958 rotated (same matrix), behind the photo.
- **CTA** (We are hiring / Empty) — "Find out more" + double-arrow-down icon, right-aligned in 306 × 44 at x 725, y 988, gap 8 px.
  - Text: Roboto 700, 39.14 px, line-height 1, `neutral-900`.
  - Icon: Material Symbols `keyboard_double_arrow_down`, 44 px box, glyph 22 × 24.57 px, `secondary`.

### 2.2 New joiner

| Element | Style | Position |
|---|---|---|
| Photo | Image slot 601 × 1080 px at x 479, y 0, in front of the `accent-2` hexagon and the bottom shapes. Template shows a grey "Image placeholder" — replace per post with a cut-out portrait (PNG, transparent background) | right half |
| `post-label` "WELCOME" | Roboto 900, 57 px (rendered), tracking +6%, ALL CAPS, `primary` | x 72, cap top y 265 |
| `post-name` "Person name" | Roboto 700, 64 px, `neutral-900` | x 72, cap top y 450 |
| `post-role` "JOB TITLE" | Roboto 500, 35 px, tracking ≈ +25%, ALL CAPS, `primary` | x 72, cap top y 545 |

- Name: first + last name only, one line (≤ 18 characters at 64 px).
- Role: ≤ 4 words, one line.
- Photo: head-and-shoulders, face in the upper half, looking at camera, background removed. Same treatment for every joiner.

### 2.3 We are hiring

Text column at x 72, y 300, width 910, vertical stack, gap 40 px:

| Element | Style |
|---|---|
| Tag "We are hiring" | Button-like box: `primary` fill, padding 12 / 24 px, height 72; text Roboto 400, 32 px, line-height 1.5, `white` |
| `post-title` (role) | Roboto 700, 85 px, line-height 1.2, `neutral-900`; ≤ 2 lines |
| `post-body` (details) | Roboto 400, 32 px, line-height 1.2, `neutral-900`; ≤ 2 lines |

- Template text is placeholder: `[Job title, up to two lines]` and `[Location · Contract type] / [How to apply]`. The Figma file repeats the role title in `post-body`; real posts MUST put location / contract / how to apply there.

### 2.4 Empty

- Same frame as We are hiring; the area 72 / 300, 910 × 600 px is free.
- **Any content MAY go in the free area**: text, images, photos, charts, stat numbers, quotes, logos of partners, etc.
- Constraints that still apply:
  - stay inside 72 / 300, 910 × 600 px — do not cover the logo, the hexagons or the CTA;
  - text uses the social type scale (§3), minimum 32 px;
  - colors from §4 only;
  - images: no text burned in, no other brand's logo larger than the SmartCo logo.

## 3. Type scale (social only)

| Token | Size | Weight | Line-height | Tracking | Case |
|---|---|---|---|---|---|
| `post-title` | 85 px | 700 | 1.2 | 0 | Sentence |
| `post-label` | 57 px | 900 | 1.0 | +6% | ALL CAPS |
| `post-name` | 64 px | 700 | 1.0 | 0 | Name |
| `cta` | 39.14 px | 700 | 1.0 | 0 | Sentence |
| `post-role` | 35 px | 500 | 1.0 | ≈ +25% | ALL CAPS |
| `post-body` / tag | 32 px | 400 | 1.2 / 1.5 | 0 | Sentence |

- MUST NOT use sizes outside this table. Minimum text size on a post: 32 px.

## 4. Color

- Background always `white`. Text `neutral-900`, `primary`, or `white` on `primary` (tag).
- Shapes: `primary`, `secondary`, `accent-2` (New joiner only). `accent-1` MUST NOT be used on social posts.
- MUST NOT: text on hexagon shapes, accent-colored text, tints, gradients.

## 5. Copy

- UK English, sentence case, no exclamation marks, no emoji (core §1).
- Post graphic carries ≤ 15 words; everything else goes in the LinkedIn caption.

## 6. Assets

- `assets/logo-color.svg` — logo.
- `assets/social/new-joiner-photo.png` — sample cut-out portrait from the Figma file (reference only; the template uses a placeholder).
- Hexagon shapes and the CTA icon are inline SVG in the template (paths copied from Figma).

## 7. Known gaps

- Exact positions of "WELCOME", "Person name", "JOB TITLE" and the job-title tracking were not readable from the Figma export; they are measured from the frame render (±2 px).
- The "WELCOME" text component is 71.35 px Black in Figma but renders at ≈ 57 px in the frame (scaled instance); 57 px is used.

## 8. Changelog

- 0.2 — 2026-10-19 — Empty: any content allowed in the free area; We are hiring: placeholder text; New joiner: image placeholder instead of photo.

- 0.1 — 2026-10-19 — Initial rules and template from "Social Templates.fig" (3 LinkedIn layouts).
