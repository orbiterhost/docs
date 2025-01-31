// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Orbiter Docs',
      description: "Official documentation for Orbiter",
      expressiveCode: {
        // You can set configuration options here
        themes: ['poimandres', 'github-light'],
      },
      logo: {
        light: "./src/assets/dark_text_logo.png",
        dark: "./src/assets/light_text_logo.png",
        replacesTitle: true
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
            base: 'api-reference',
            label: 'API Reference',
            schema: './schemas/orbiter-api-v1.yaml',
            sidebarMethodBadges: true
          },
        ]),
      ],
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
        ...openAPISidebarGroups,
        { label: 'CLI', slug: 'cli' },
      ],
      customCss: ['./src/tailwind.css'],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            href: "https://orbiter.host/orbiter.png"
          },
          content: "https://orbiter.host/orbiter.png"
        },
        {
          tag: "meta",
          attrs: {
            name: "description"
          },
          content: "Official documentation for Orbiter"
        },
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://docs.orbiter.host"
          }
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website"
          }
        },
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "Orbiter Docs"
          }
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content: "Offician documentaiton for Orbiter"
          }
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://cdn.orbiter.host/ipfs/bafybeiexhly25ojop6a6bwcrniasjzwsfoom6w6mjvg64b7t7jtlbomrgq"
          }
        },
        // Twitter Meta Tags
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image"
          }
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:domain",
            content: "docs.orbiter.host"
          }
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:url",
            content: "https://docs.orbiter.host"
          }
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:title",
            content: "Orbiter Docs"
          }
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:description",
            content: "Official documentation for Orbiter"
          }
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://cdn.orbiter.host/ipfs/bafybeiexhly25ojop6a6bwcrniasjzwsfoom6w6mjvg64b7t7jtlbomrgq"
          }
        }

      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
