---
title: "Hello World"
date: 2026-04-13
description: "Welcome post for the demo blog, showing the content format and writing style."
tags:
  - intro
  - astro
draft: false
---

Welcome to the demo blog. This post exists as a simple reference for content structure and formatting.

## What This Blog Demonstrates

- Typed content collections in Astro
- Reusable layouts and components
- Static pages with SEO, RSS, and sitemap support

## Frontmatter Schema

Each post includes:

- `title`
- `date`
- `description`
- `tags`
- `draft`

## Example Snippet

```ts
const publishedPosts = posts.filter((post) => !post.data.draft);
```
