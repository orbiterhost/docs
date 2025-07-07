import { defineConfig } from "vocs";

export default defineConfig({
	title: "Orbiter",
	logoUrl: "/light_text_logo.png",
	baseUrl: "https://docs-test.orbiter.website",
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
			link: "https://farcaster.xyz/~/channel/orbiter",
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
			text: "Dashboard",
			link: "https://app.orbiter.host",
		},
		{
			text: "Pricing",
			link: "/pricing",
		},
		{
			text: "Blog",
			link: "/blog",
		},
		{
			text: "Docs",
			link: "/quickstart",
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
				{ text: "bhvr", link: "/frameworks/bhvr" },
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
				{ text: "Functions", link: "/functions" },
				{ text: "Custom Domains", link: "/custom-domains" },
				{ text: "Redirects & 404s", link: "/redirects" },
				{ text: "GitHub Actions & Hooks", link: "/github-actions-and-hooks" },
			],
		},
		{
			text: "CLI Reference",
			items: [
				{ text: "Installation", link: "/cli-reference/" },
				{ text: "auth", link: "/cli-reference/auth" },
				{ text: "login", link: "/cli-reference/login" },
				{ text: "new", link: "/cli-reference/new" },
				{ text: "deploy", link: "/cli-reference/deploy" },
				{ text: "deploy-server", link: "/cli-reference/deploy-server" },
				{ text: "create", link: "/cli-reference/create" },
				{ text: "list", link: "/cli-reference/list" },
				{ text: "update", link: "/cli-reference/update" },
				{ text: "versions", link: "/cli-reference/versions" },
				{ text: "rollback", link: "/cli-reference/rollback" },
				{ text: "delete", link: "/cli-reference/delete" },
			],
		},
	],
});
