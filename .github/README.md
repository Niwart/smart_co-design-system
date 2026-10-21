# SmartCo Design System

Brand design system for **SmartCo** marketing assets — decks, Word documents and social posts.
Exported from Claude Design. The repository root is also an **Agent Skill** (`SKILL.md`), so the same
folder works as a design-system repo and as a Claude Code skill.

> Private repository. Contains client source material (`uploads/`, sample photos and documents).

## What's inside

| Path | Contents |
| --- | --- |
| `SKILL.md` | Skill entry point (`smartco-design`) and key brand rules |
| `readme.md` | Full design-system documentation (content, visual foundations, logo, fonts, index) |
| `documents.md` | Rules for Word documents (white papers, proposals, reports) |
| `social.md` | Rules for social posts (LinkedIn 1080×1080) |
| `styles.css` | CSS entry point — imports everything in `tokens/` |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css` |
| `fonts/` | Roboto 400/600/700 + italics (SIL OFL) |
| `guidelines/` | Specimen cards: colors, type, spacing, brand rules |
| `components/` | React primitives — Logo, Eyebrow, Overline, Heading, Text, KeyNumber, Button, Tag, Card, DataTable (`.jsx`, `.d.ts`, `.prompt.md`) |
| `templates/document/` | Word template `SmartCo-Document.dotx`, sample `.docx`, HTML preview, `build-dotx.js` |
| `templates/social/` | `SocialPost.dc.html` — New joiner, We are hiring, Empty layouts |
| `assets/` | Logos (colour / white SVG), brand hexagons, placeholders |
| `uploads/` | Original sources: `00-core.md` (single source of truth), Roboto family, logos, source doc |
| `_ds_manifest.json`, `_ds_bundle.js`, `_adherence.oxlintrc.json`, `.thumbnail`, `thumbnail.html` | Claude Design export metadata — keep them so the system can be re-imported |

## Use as a design system

Link the tokens in any HTML page:

```html
<link rel="stylesheet" href="path/to/smartco-design-system/styles.css">
```

Then reference tokens by name (`var(--color-primary)` etc.), never raw values — see `tokens/` and `readme.md`.

## Use as a Claude Code skill

The skill folder must be named after the skill: `smartco-design`.

**For all your projects** (personal skill):

```bash
git clone git@github.com:<your-account>/smartco-design-system.git ~/.claude/skills/smartco-design
```

**For one project** (shared with everyone who works in that repo):

```bash
git submodule add git@github.com:<your-account>/smartco-design-system.git .claude/skills/smartco-design
```

Update later with `git pull` (or `git submodule update --remote`).

## Source of truth

`uploads/00-core.md` — *SmartCo — Core*, owner: Arty. All other rule files inherit from it;
an asset file may override a core rule only by listing it under `Overrides:`.
