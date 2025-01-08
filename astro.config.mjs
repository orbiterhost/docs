// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Orbiter Docs',
      expressiveCode: {
        // You can set configuration options here
        themes: ['ayu-dark', 'github-light'],
        styleOverrides: {
          // You can also override styles
          borderRadius: '0.5rem',
          frames: {
            shadowColor: '#124',
          },
        },
      },
      logo: {
        src: "./src/assets/white_logo.png",
        replacesTitle: true
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        { label: 'Quickstart', slug: 'quickstart' },
        { label: 'What is Orbiter?', slug: 'what-is-orbiter' },
        {
          label: 'Frameworks',
          items: [
            { label: 'React', slug: 'frameworks/react' },
            { label: 'Astro', slug: 'frameworks/astro' },
            { label: 'Next', slug: 'frameworks/next' },
            { label: 'Hugo', slug: 'frameworks/hugo' },
            { label: 'Vite Press', slug: 'frameworks/vite-press' },
            { label: 'Gatsby', slug: 'frameworks/gatsby' },
          ],
        },
        { label: 'CLI', slug: 'cli' },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
