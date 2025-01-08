import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#bdcad8', 600: '#487093', 900: '#233444', 950: '#1a252f' };
const gray = { 100: '#f5f6f9', 200: '#ecedf3', 300: '#c0c2c8', 400: '#888b98', 500: '#555763', 700: '#353742', 800: '#242630', 900: '#17181d' };

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
