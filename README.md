# Lester New Blog

A production-ready Astro blog built with typed content collections and static generation.

## Features

- TypeScript and Tailwind CSS
- Content Collections for typed Markdown posts
- Dynamic post and tag pages
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

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

Open: `http://localhost:8080`

### Production Build

```bash
npm run build
npm run preview
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

## Sample Posts Included

- `hello-world.md`
- `building-with-astro-content-collections.md`
- `deploying-an-astro-blog-on-fly.md`

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

Create your local env file from the example and set values:

- `SITE_URL` (public site URL, e.g. `https://lester-new-blog.fly.dev`)

```bash
cp .env.example .env
```

### Deploy

```bash
flyctl launch --no-deploy
flyctl deploy
```

## Docker Build (Optional)

```bash
docker build -t lester-new-blog .
docker run --rm -p 8080:8080 lester-new-blog
```

## License

Internal/project-specific.
