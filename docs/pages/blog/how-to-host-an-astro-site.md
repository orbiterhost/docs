---
layout: minimal
authors:
  - "[Steve Simkins](https://twitter.com/stevesimkins)"
date: 2025-01-06
title: "How To Host an Astro Site"
description: "Hosting a static React website is simple. This tutorial shows you all the steps, including setting up the site and uploading to Orbiter."
heroImage: "https://cdn.orbiter.host/ipfs/bafybeid5uepv7eg3eu4fcapz5tkumvsgz7d3qqusfs55pz2h4nq5qkcdjq"
---
# How To Host an Astro Site

![How To Host an Astro Site](https://cdn.orbiter.host/ipfs/bafybeid5uepv7eg3eu4fcapz5tkumvsgz7d3qqusfs55pz2h4nq5qkcdjq)

Over the years building on the web has become so complicated that it’s hard to keep up with all the tools and standards. There’s many of us who enjoyed the simplicity of working with HTML CSS and Javascript back in the day, but we also find ourselves needing some modern advancements to handle the stuff we don’t want to touch. Similarly I think the same group of people feel the same way about hosting, where we don’t want to mess with build pipelines and messy errors, but we also don’t want to use FTP to a server. This is where Astro and Orbiter meet in the best way possible.

[Astro](https://astro.build) is an interesting mix of old and new. Each `.astro` file is essentially an HTML file with super powers, with features like props, generating static content, and more. It’s ideal for publishing content and getting great SEO as well as fast speeds. Using it feels like writing just HTML CSS and Javascript, but you can also incorporate UI frameworks like React, Vue, Solid.js, and Svelte as individual components to keep things flexible. Truly it is a master class in static website frameworks with one of the best developer experiences out there.

In this post we’ll show you how to host an Astro site on Orbiter, which embodies the same principles of having a wonderful developer experience but with no sacrifice to performance and open garden access. We actually host this website on Astro and love the workflow, and we think you will too. Let’s dig into it!

## Setup

In order to follow this tutorial you’ll want the following:

- An account on Orbiter: [sign up for a free account](https://app.orbiter.host) in less than a minute.
- Node.js (version 20 or higher, I personally like using [this tool](https://github.com/Schniz/fnm) for installing and managing Node versions)
- A text editor like [VSCode](https://code.visualstudio.com/) (or [Zed](https://zed.dev) if you’re cool 😉 )

That’s it! Once you’ve got all your tools together let’s open the terminal and run this command:

```
npm create astro@latest orbiter-site
```

This will run a lovely install walkthrough about what your preferences. I personally would recommend the following:

```
  tmpl   How would you like to start your new project?
	         ● A basic, minimal starter (recommended)
	deps   Install dependencies? (recommended)
           ● Yes
  git   Initialize a new git repository? (optional)
           ● Yes
```

Once it’s finished installing you can open the folder `orbiter-site` with your text editor and move to the next step.

## Build

When you open up the project directory you should see the following structure:

```
.
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── tsconfig.json

7 directories, 11 files
```

The template is designed to give you a feel for all the pieces that go into an Astro website. Let’s briefly go over each of them:

### Assets

This is where you can keep images that you want to use in your site. The public directory works too, this is just a bit friendlier and will bundle it all together and keep it neat.

### Pages

Pages are how you designate different routes. For instance, you could create a new folder inside of `pages` called `about`, then put an `index.astro` file in there. This would create the path `/about` on your website. Let’s look inside the `pages/index.astro`

```tsx