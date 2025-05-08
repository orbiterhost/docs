import { defineConfig } from "vocs";

export default defineConfig({
  title: "Orbiter",
  logoUrl: "/light_text_logo.png",
  baseUrl: "https://docs.orbiter.host",
  description: "Official Documation for Orbiter",
  iconUrl: "/icon.png",
  ogImageUrl: "/og.png",
  head({ path }) {
    const fcData = JSON.stringify({
      version: "next",
      imageUrl: "https://docs.orbiter.host/image.png",
      button: {
        title: "Orbiter Docs",
        action: {
          type: "launch_frame",
          name: "Orbiter Docs",
          url: `https://docs.orbiter.host${path}`,
          splashImageUrl: "https://docs.orbiter.host/splash.png",
          splashBackgroundColor: "#121113",
        },
      },
    });
    return <meta name="fc:frame" content={fcData} />;
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/orbiterhost",
    },
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/orbiter",
    },
    {
      icon: "discord",
      link: "https://discord.gg/RWThJkbB4W",
    },
  ],
  markdown: {
    code: {
      themes: {
        light: "github-dark-high-contrast",
        dark: "github-dark-high-contrast",
      },
    },
  },
  theme: {
    colorScheme: "dark",
    accentColor: "#FFB757",
  },
  editLink: {
    pattern: "https://github.com/orbiterhost/docs/edit/main/docs/pages/:path",
    text: "Edit on GitHub",
  },
  topNav: [
    {
      text: "API Keys",
      link: "https://app.orbiter.host/api-keys",
    },
    {
      text: "Blog",
      link: "https://orbiter.host/blog",
    },
    {
      text: "Support",
      link: "mailto:steve@orbiter.host,justin@orbiter.host",
    },
  ],
  sidebar: [
    {
      text: "Getting Started",
      items: [
        { text: "Quickstart", link: "/quickstart" },
        { text: "What is Orbiter?", link: "/what-is-orbiter" },
      ],
    },
    {
      text: "Frameworks",
      collapsed: true,
      items: [
        { text: "React", link: "/frameworks/react" },
        { text: "Astro", link: "/frameworks/astro" },
        { text: "Next", link: "/frameworks/next" },
        { text: "Hugo", link: "/frameworks/hugo" },
      ],
    },
    {
      text: "Guides",
      items: [
        { text: "Deploy a Site", link: "/deploy" },
        { text: "Custom Domains", link: "/custom-domains" },
        { text: "CLI Reference", link: "/cli" },
        { text: "Mini Apps", link: "/miniapps" },
        { text: "GitHub Actions & Hooks", link: "/github-actions-and-hooks" },
      ],
    },
  ],
});
