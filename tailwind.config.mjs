import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '500',
            },
            h2: {
              scrollMarginTop: '6rem',
            },
            h3: {
              scrollMarginTop: '6rem',
            },
            code: {
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
