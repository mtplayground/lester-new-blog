---
title: "Building with Astro Content Collections"
date: 2026-04-10
description: "Why typed collections and validated frontmatter make blog features safer to build."
tags:
  - astro
  - content
  - typescript
draft: false
---

Astro Content Collections provide a reliable foundation for content-heavy sites.

With a typed schema, every post frontmatter field is validated at build time. That means pages like home, tags, and RSS can query content confidently without defensive checks scattered everywhere.

For this blog, the collection schema defines:

- `title`
- `date`
- `description`
- `tags`
- `draft`

This structure keeps rendering logic simple and makes future features, such as related posts or advanced filtering, straightforward to implement.

## Practical Benefit

When list pages, tag routes, and RSS generation all rely on the same schema contract, refactors become safer and easier to review.

```ts
const posts = await getCollection('blog', ({ data }) => !data.draft);
posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
```
