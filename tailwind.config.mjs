import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#b7cae9', 600: '#3868be', 900: '#1c3157', 950: '#16243b' };
const gray = { 100: '#f5f6f9', 200: '#ebeef2', 300: '#bfc2c8', 400: '#868c96', 500: '#535862', 700: '#343841', 800: '#23272f', 900: '#16181c' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
