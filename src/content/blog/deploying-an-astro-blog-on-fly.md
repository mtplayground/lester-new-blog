---
title: "Deploying an Astro Blog on Fly.io"
date: 2026-04-08
description: "A quick walkthrough of using a multi-stage Docker build with nginx on Fly.io."
tags:
  - deploy
  - docker
  - flyio
draft: false
---

Deploying this blog uses a multi-stage Dockerfile:

1. Build stage installs dependencies and runs `astro build`.
2. Runtime stage serves static files from `dist/` via nginx.

Fly.io uses `fly.toml` to define the app, region, and HTTP service settings.

Key points:

- `internal_port` is set to `8080`
- HTTPS is forced
- `SITE_URL` is configured for canonical URLs, RSS, and sitemap generation

This setup keeps runtime images lightweight while preserving a predictable build pipeline.
