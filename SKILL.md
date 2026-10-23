---
name: smartco-design
description: Use this skill to generate well-branded interfaces and assets for SmartCo, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping. Also use for SmartCo social media posts (LinkedIn 1080×1080: new joiner / welcome, we are hiring / vacancy, announcements, events, quotes, stats).
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

For Word documents (white papers, proposals, reports) also follow documents.md. For social posts follow social.md.

Key rules (from uploads/00-core.md): only the 8 color tokens; heading font 700/600 and body font 400/600 only; no gradients, shadows, glows or 3D (except the hexagon shadows built into the social template); max one accent per layout; accent colors as text only in the `number` role on white (accent-1 ≥24px, accent-2 ≥48px); ALL CAPS only for eyebrow and overline; body text left-aligned; ≥80% solid overlay under text on photos.

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
