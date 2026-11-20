# SmartCo Design System

Design system for **SmartCo** brand assets: presentations, Word documents and social posts. This file is an index — it points to where rules live and does not repeat them. If anything here disagrees with a rule file, the rule file wins.

## Where the rules live

| Need | Read |
|---|---|
| Brand essence, audience, tone of voice, writing mechanics | `uploads/00-core.md` §1, §1.1 |
| Global hard rules (colors, fonts, no effects, logo, photo overlay) | `uploads/00-core.md` §2 |
| Color tokens, proportions, approved text/background pairs | `uploads/00-core.md` §3 |
| Fonts, type roles, type rules | `uploads/00-core.md` §4 |
| Logo versions, clear space, minimum size | `uploads/00-core.md` §5 |
| Presentations 16:9 | `deck.md` |
| Word documents (white papers, proposals, reports, sell sheets) | `documents.md` |
| Social posts (LinkedIn 1080×1080) | `social.md` |
| Which template / layout to pick for a request | `SKILL.md` (routing tables) |

**Precedence:** `uploads/00-core.md` is the single source of truth. An asset file (`deck.md`, `documents.md`, `social.md`) may override a core rule only by listing it under `Overrides:` in its header. MUST = never break; SHOULD = default, break only with a stated reason.

## Defaults not defined in core

Decisions made for the HTML tokens and React components. Core is silent on these; they are proposals until confirmed.

- **Corner radii:** square (0) everywhere, to match the flat, no-effects rules.
- **Spacing:** 4px-based scale in `tokens/spacing.css` (`--space-1`…`--space-10`: 4–128px). Favour generous margins.
- **Type sizes (HTML):** 1.333 scale in `tokens/typography.css` (12 / 14 / 16 / 21 / 28 / 38 / 50px; ×2 for 1920×1080). Print and PowerPoint sizes are set in `documents.md` and `deck.md`.
- **Borders:** 1px `neutral-200` for dividers and table lines; 2px `neutral-900` top rule on tables; 2px borders on buttons.
- **Cards:** white with a 1px `neutral-200` hairline, or a solid `primary` / `secondary` fill. No shadow.
- **Hover:** fill inversion (primary button → white with primary text and border; outline → primary fill); ghost links underline. No opacity or shade shifts — they create off-palette colors.
- **Press:** 1px downward nudge; no shrink, no shadow.
- **Animation (HTML):** short (120–200ms) fades or color transitions, standard ease, no bounces. Deck animation rules are in `deck.md`.
- **Photo overlays:** `--overlay-photo-dark` / `--overlay-photo-primary` (≥ 80% opacity, core §2). No blur anywhere.
- **Icons:** no brand set supplied. If needed, Lucide outline icons (2px stroke) in `neutral-900`, `neutral-700`, `primary` or `white` only, never accent colors. Unicode → is fine in ghost links.

## Files

- `styles.css` — CSS entry point (imports `tokens/`)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `fonts/` — Roboto TTF (SIL OFL, `OFL.txt`); see core §4 for allowed weights
- `assets/` — `logo-color.svg`, `logo-white.svg`, `brand-hexagons.png`, placeholders, `social/`
- `guidelines/` — specimen cards: colors, type, spacing, brand rules
- `components/` — React primitives, each with `.jsx`, `.d.ts`, `.prompt.md` and a card per folder:
  - `brand/` **Logo** (enforces variants, clear space, minimum size)
  - `type/` **Eyebrow**, **Overline**, **Heading**, **Text**, **KeyNumber** (encodes the `number` role and its accent contrast minimums)
  - `actions/` **Button**
  - `content/` **Tag**, **Card**, **DataTable**
- `templates/presentation/` — `SmartCo-Deck.potx` (PowerPoint master), `Deck.dc.html` (HTML slides), build scripts. Rules in `deck.md`.
- `templates/document/` — `SmartCo-Document.dotx` (Word template), sample `.docx`, `Document.dc.html` (HTML preview), `build-dotx.js`. Rules in `documents.md`.
- `templates/social/` — `SocialPost.dc.html` (New joiner, We are hiring, Empty). Rules in `social.md`.
- `uploads/` — original sources: `00-core.md`, Roboto family, logos, source doc
- `SKILL.md` — Agent Skill entry and routing
- `thumbnail.html`, `_ds_manifest.json`, `_ds_bundle.js`, `_adherence.oxlintrc.json` — Claude Design export metadata; keep for re-import

## Open items

- Font source link and license in core §4.1 (`LINK_OR_PATH`, license TBD).
- Core §1 visual summary is still marked "e.g.".
- The defaults above need confirming.
- No product UI — form controls, dialogs and toasts are intentionally not built.
