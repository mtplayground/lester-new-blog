# Lester New Blog

A production-ready Astro blog starter with:

- TypeScript and Tailwind CSS
- Content Collections for typed Markdown posts
- Dynamic post and tag pages
- Dark mode with persisted preference
- SEO metadata, RSS feed, and sitemap generation
- Docker + Fly.io deployment configuration

## Tech Stack

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Local Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
npm install
```

### Run Dev Server

```bash
npm run dev -- --host 0.0.0.0 --port 8080
```

Open: `http://localhost:8080`

### Production Build

```bash
npm run build
npm run preview -- --host 0.0.0.0 --port 8080
```

## Content Authoring

Blog posts live in:

- `src/content/blog/*.md`

Required frontmatter fields:

- `title` (string)
- `date` (date)
- `description` (string)
- `tags` (string[])
- `draft` (boolean)

Example:

```md
---
title: "My Post"
date: 2026-04-12
description: "A short summary"
tags:
  - astro
  - blog
draft: false
---
```

## Generated Routes

- Home: `/`
- About: `/about/`
- Blog posts: `/blog/<slug>/`
- Tag index: `/tags/`
- Tag pages: `/tags/<tag>/`
- RSS: `/rss.xml`
- Sitemap index: `/sitemap-index.xml`

## Deployment (Fly.io)

This repository includes:

- `Dockerfile` (multi-stage build)
- `nginx.conf` (serves static `dist/` output)
- `fly.toml` (Fly app configuration)
- `.env.example` (required environment values)

### Environment Variables

Copy `.env.example` and set values:

- `SITE_URL` (public site URL, e.g. `https://lester-new-blog.fly.dev`)

### Deploy

```bash
flyctl launch --no-deploy
flyctl deploy
```

## License

Internal/project-specific.
