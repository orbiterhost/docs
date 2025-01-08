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
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
