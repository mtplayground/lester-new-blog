// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const site = process.env.SITE_URL?.trim() || 'https://lester-new-blog.fly.dev';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
});
