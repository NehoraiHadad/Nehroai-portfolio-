import type { Config } from 'tailwindcss';

// Tailwind v4 reads its design tokens from the `@theme` block in
// `app/globals.css` (see the Nehorai design-system tokens there), not from
// this file. Content sources are auto-detected by the v4 engine. This config
// is kept only as a content-glob hint for tooling; color/font/animation tokens
// are defined as CSS variables in globals.css.
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
};

export default config;
