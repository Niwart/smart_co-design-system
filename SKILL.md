---
name: smartco-design
description: Use this skill to generate well-branded interfaces and assets for SmartCo, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping. Also use for SmartCo social media posts (LinkedIn 1080×1080: new joiner / welcome, we are hiring / vacancy, announcements, events, quotes, stats), SmartCo Word documents (A4 .docx/PDF: white papers, reports, proposals, sell sheets / one-pagers), including reformatting an existing document to the brand, and SmartCo presentations (16:9 decks: PowerPoint, Google Slides, PDF, HTML slides).
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

For Word documents (white papers, proposals, reports) also follow documents.md. For social posts follow social.md. For presentations / decks follow deck.md.

Key rules (from uploads/00-core.md): only the 8 color tokens; heading font 700/600 and body font 400/600 only; no gradients, shadows, glows or 3D (except the hexagon shadows built into the social template); max one accent per layout; accent colors as text only in the `number` role on white (accent-1 ≥24px, accent-2 ≥48px); ALL CAPS only for eyebrow and overline; body text left-aligned; ≥80% solid overlay under text on photos. Format-specific overrides listed in the `Overrides:` header of documents.md / social.md / deck.md take precedence over these key rules.

## Routing: documents

Trigger words: document, doc, Word, Word document, .docx, .dotx, A4, PDF document, long-form, write-up, paper, publication, report template, branded document.

| Signal in prompt | Type | Sections (documents.md §4) |
|---|---|---|
| white paper, whitepaper, thought leadership, research paper, insight paper, point of view, POV | White paper | full anatomy 1–12 |
| report, annual report, research report, findings, study, survey results, analysis | Report | full anatomy; Foreword optional |
| proposal, bid, tender response, RFP response, pitch document, statement of work, SOW, engagement letter | Proposal | skip optional (*) sections unless asked |
| sell sheet, one-pager, one pager, fact sheet, datasheet, product sheet, brochure page, leave-behind | Sell sheet | cover + 1–2 pages; no TOC, no endnotes |
| reformat, rebrand, apply SmartCo style, brand this doc, clean up formatting, convert to SmartCo template, fix styles, check against guidelines, audit this document | Existing file | §10.2 color replacement, §3 styles, §13 checklist |

Building blocks (names as in documents.md): cover, table of contents, foreword, executive summary, numbered sections, practitioner lens, conclusion, appendix, endnotes, about SmartCo, contact the authors, about the authors, back page, stat block / key number (§5), callout (§6.1), stage / category cards (§6.2), table (§7), figure / chart (§8).

Files:
- Rules: documents.md (read fully; its `Overrides:` beat core)
- Word template: templates/document/SmartCo-Document.dotx (placeholders only)
- Real example: templates/document/SmartCo-Document-sample.docx
- HTML preview: templates/document/Document.dc.html
- Generator: templates/document/build-dotx.js

1. Always start from SmartCo-Document.dotx, never a blank file. Format only through named styles (documents.md §3.1); no direct formatting.
2. Deliverable is .docx (editable) and/or PDF (documents.md §12). Ask which if not stated. File name: "SmartCo – <Title> – <Month YYYY>".
3. If the type is unclear, ask one question: "White paper, report, proposal or sell sheet?"
4. Not covered by documents.md — ask, don't guess: slides / deck / presentation (→ deck.md), social posts (→ social.md), "case study" (document or social post?), press release, email, web page.
5. Before handoff run the checklist in documents.md §13.

## Routing: social posts

Trigger words: social, social media, social post, post, LinkedIn, LI post, feed post, square post, 1080×1080, 1:1, carousel slide, announcement graphic, post image, LinkedIn banner.

| Signal in prompt | Rules | Template | variant |
|---|---|---|---|
| new joiner, new hire, new starter, welcome, onboarding post, joined the team, meet our new, introducing | social.md §2.2 | templates/social/SocialPost.dc.html | `new-joiner` |
| we are hiring, hiring, vacancy, job post, job opening, open role, open position, recruiting, join us, careers | social.md §2.3 | same | `we-are-hiring` |
| anything else: announcement, news, event, webinar, quote, stat, partnership, award, milestone, white paper promo, custom, empty | social.md §2.4 | same | `empty` |

1. Always read social.md fully before building; it overrides core where listed in its `Overrides:`.
2. Use only these 3 layouts. Never invent a new arrangement.
3. If the layout is unclear (e.g. "make a post about X" where X could be a person joining or a role to fill), ask one question: "New joiner, We are hiring, or Empty?"
4. "post" without social/LinkedIn context (blog post, article, forum post) is NOT a social post — ask before using social.md.
5. Output: the template with the matching `variant` filled in; export PNG 1080×1080 (2× = 2160×2160).
6. Before handoff check: ≤ 15 words on the graphic, text ≥ 32 px and only sizes from social.md §3, UK English, sentence case, no emoji or exclamation marks, no `accent-1`, no text on hexagons, logo not covered or resized.

## Routing: presentations

Trigger words: presentation, deck, slides, slide deck, slide, PowerPoint, PPT, .pptx, .potx, Google Slides, keynote, 16:9, pitch deck, webinar slides, workshop slides.

| Signal in prompt | Layouts (deck.md §4) |
|---|---|
| pitch deck, client proposal deck, sales deck, credentials deck | Cover, Agenda, Section divider, Title + content, Key number / Stats row, Team, Closing |
| webinar, workshop, training, talk, keynote | Cover, Agenda, Section divider, Title + content, Two columns, Quote, Closing |
| results, QBR, report deck, update, review | Cover, Title + content, Key number, Stats row, Chart / table, Closing |
| single slide, one slide, add a slide | the one layout that fits the content (§4) |
| reformat, rebrand, apply SmartCo style to a deck, check this deck | §2 theme, §3 type scale, §12 checklist |

Files:
- Rules: deck.md (read fully; its `Overrides:` beat core). Status: draft v0.1 — values marked *proposed* are not yet approved.
- Template: not built yet (templates/presentation/ planned, deck.md §11). Build from deck.md and tokens/ until it exists.

1. Always read deck.md fully before building. Use only the 11 layouts in §4; never invent a new arrangement.
2. One message per slide; titles are sentence-case takeaways; ≤ 5 bullets.
3. Deliverable: PDF by default, PPTX if the client must edit, HTML slides at 1920×1080 for previews (deck.md §10). Ask which if not stated. File name: "SmartCo – <Title> – <Month YYYY>".
4. "Slide" inside a social carousel (1080×1080) is a social post → social.md, not deck.md. If unclear, ask.
5. Before handoff run the checklist in deck.md §12.
