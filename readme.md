# SmartCo Design System

Design system for **SmartCo** brand assets: presentations, documents (sell sheets, proposals) and social posts / digital flyers. Built from a brand-guidelines file plus uploaded logo and font files — there is no product codebase or Figma file.

## Sources

- `uploads/00-core.md` — *SmartCo — Core*, v1.1 (2026-09-29), owner: Arty. Declared single source of truth; all asset files inherit from it. Its asset registry lists `deck.md`, `documents.md`, `social.md` as **planned** (not provided).
- `uploads/logo-color.svg`, `uploads/logo-white.svg` — logo artwork (4:1), copied to `assets/`.
- `uploads/Roboto/` — Roboto font family (SIL OFL); allowed weights copied to `fonts/`.
- No Figma, GitHub repo, codebase, slide templates or imagery were supplied.

**Unfilled placeholders in core (TBD):** Audience (`WHO_WE_SPEAK_TO`), Personality (`WORD_1 · WORD_2 · WORD_3`), font source link. Fonts resolved: Roboto for both heading and body. Primary is named "Brand Navy" but its hex `#0065FC` is a vivid blue — the hex is used.

## Products / surfaces

None defined as software. The brand's surfaces are marketing/communication assets (16:9 decks, documents, social). No UI kits or slide templates exist in the source, so none were built — add them when `deck.md` / `documents.md` / `social.md` land.

## Governance (from core §0)

- Reference tokens by name, never raw values.
- Asset files may override a rule only by listing it under `Overrides:`.
- MUST = never break. SHOULD = default; break only with a stated reason.

---

## CONTENT FUNDAMENTALS

Core gives tone as an example ("e.g."), still to be confirmed:

- **Short declarative sentences.** "Reporting time fell each month." not "We're thrilled to share that reporting times have been dramatically reduced!"
- **No exclamation marks.** Ever.
- **Plain language over jargon.** "One view for every team" over "unified cross-functional observability layer".
- **Casing:** sentence case for every headline and body. ALL CAPS only for `eyebrow` (max 3 words, e.g. "CASE STUDY", "PRODUCT UPDATE") and `overline` (section markers: "01", "RESULTS", job roles). Units in caps on numbers: 12.4M, 3.2BN, 850K.
- **Numbers carry the story** ("data over decoration"): lead with a key metric, caption it with a source line ("Source: SmartCo internal data, Q3 2026.").
- **Highlight one phrase** of a headline in primary, not the whole line: "Data that makes *decisions easier*".
- **Person:** not specified. Default to "we" (SmartCo) and "you" (reader); confirm.
- **Emoji:** not used. No mention in core; the flat, no-effects rules imply none.
- **Alignment:** body text left-aligned, never centered.

## VISUAL FOUNDATIONS

- **Vibe:** generous white space, one strong accent per layout, data over decoration (core's example summary). Flat, confident, editorial.
- **Color:** only the 8 tokens in `tokens/colors.css`. Proportions ~70% white/neutrals · 25% primary/secondary · ≤5% accent. Max one accent (accent-1 *or* accent-2) per layout — a key number, a CTA or a supporting shape.
- **Text pairs (MUST):** neutral-900 on white/secondary/accent-1/accent-2; neutral-700 on white; white on primary; primary on white; accent-1 on white as `number` ≥24px; accent-2 on white as `number` ≥48px (brand-accepted 1.5:1 exception). Never accent text on primary; never secondary as text.
- **Type:** heading font 700/600, body font 400/600 — nothing else. Scale ratio 1.25–1.33 between roles. Tabular figures in tables. Sizes are not specified in core — `tokens/typography.css` proposes a 1.333 scale (12 / 14 / 16 / 21 / 28 / 38 / 50px; ×2 for 1920×1080 decks).
- **Backgrounds:** solid white by default; solid primary for "dark" sections/covers; secondary for supporting blocks. No gradients, textures, patterns or illustration systems are defined.
- **Imagery:** none supplied; color vibe unspecified. Any text on a photo needs a solid overlay ≥80% opacity (`--overlay-photo-dark` / `--overlay-photo-primary`). Logo on photos only in the white version, with overlay.
- **Shadows, glows, 3D, gradients:** forbidden (MUST NOT). Depth comes from solid fills and hairlines only; there are no shadow tokens.
- **Borders:** 1px neutral-200 for dividers and table lines; 2px neutral-900 top rule anchors tables; 2px borders on buttons.
- **Corner radii:** not defined in core. Default here is square (0) to match the flat, no-effects posture — *proposed, confirm*.
- **Cards:** flat — white with 1px neutral-200 hairline, or a solid primary / secondary fill. No shadow, square corners.
- **Spacing:** not defined in core; proposed 4px-based scale (`--space-1`…`--space-10`: 4–128px). Favor generous margins.
- **Hover:** fill inversion (primary button → white with primary text/border; outline → primary fill); ghost links underline. No opacity or shade shifts — those would create off-palette colors.
- **Press:** 1px downward nudge; no shrink, no shadow.
- **Animation:** not defined. If needed, short (120–200ms) fades/color transitions with a standard ease; no bounces.
- **Transparency / blur:** only for the ≥80% photo overlays. No blur.
- **Layout:** left-aligned grids; eyebrow sits directly above headline; overline sits at top of page/slide; one `display` per layout.

## ICONOGRAPHY

No icon set, icon font, SVG sprite or PNG icons are defined in core or supplied. Nothing was copied into `assets/`.

- Emoji: not used. Unicode arrows (→) are acceptable in ghost links.
- **Proposed substitution (flag):** if icons are needed, use [Lucide](https://lucide.dev) from CDN (`https://unpkg.com/lucide@latest`) — 2px stroke outline icons fit the flat, no-effects rules. Render in neutral-900, neutral-700, primary or white only; never in accent colors. Confirm or supply the brand set.

## Logo

`assets/logo-color.svg` (on white) and `assets/logo-white.svg` (on primary, secondary, overlaid dark photos). 4:1 artwork. Min 120px wide / 1in print; clear space = logomark height; never on accent-1/accent-2 or busy image areas; never stretched, recolored, rotated or effected. Use the `Logo` component.

## Fonts

Roboto for both `--font-heading` and `--font-body`, self-hosted from the uploaded files in `fonts/` (TTF): 400, 600, 700 + italics only — the allowed weights. License: SIL OFL (`fonts/OFL.txt`). The rest of the uploaded family (Condensed, SemiCondensed, other weights) is intentionally not shipped.

---

## Index

- `styles.css` — entry point (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `fonts/` — Roboto TTF 400/600/700 + italics, OFL.txt
- `guidelines/` — 20 foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), each with `.jsx`, `.d.ts`, `.prompt.md` and a card per directory
- `assets/` — logo-color.svg, logo-white.svg, brand-hexagons.png (hexagon cluster brand graphic, from the white paper cover)
- `thumbnail.html` — homepage tile
- `SKILL.md` — Agent Skill entry
- `uploads/00-core.md` — source brand file
- `social.md` — social post rules (LinkedIn 1080×1080), from Figma "Social Templates.fig" (original: https://www.figma.com/design/efBigiaEDHAo8OuE2H4XLU/SmartCo-Assets-v2.0?node-id=6192-236)
- `documents.md` — Word document rules (inherits core), derived from the June 2026 white paper "AI in Programme Delivery — Campbell & Khan"

## Components

- `components/brand/` — **Logo**
- `components/type/` — **Eyebrow**, **Overline**, **Heading**, **Text**, **KeyNumber**
- `components/actions/` — **Button**
- `components/content/` — **Tag**, **Card**, **DataTable**

No source defines a component inventory; this set is sized to the brand's asset needs (decks, documents, social): the type roles as primitives, a CTA, labels, content blocks and data tables. Form controls, dialogs, toasts etc. were intentionally omitted — the brand has no product UI.

### Intentional additions

- **Logo** — enforces logo variants, clear space and minimum size.
- **KeyNumber** — encodes the `number` role and its accent contrast minimums so they can't be broken.

## Templates

- `templates/document/` — **Document (Word, A4)**: `SmartCo-Document.dotx` (Word template: theme, styles, page setup, header/footer, sample blocks), `SmartCo-Document-sample.docx`, `Document.dc.html` (HTML preview). Rules in `documents.md`.

- `templates/social/` — **Social post (LinkedIn 1080×1080)**: `SocialPost.dc.html` with New joiner, We are hiring and Empty layouts (variant tweak). Rules in `social.md`.

## UI kits / slides

None — no product UI or slide template was provided.
