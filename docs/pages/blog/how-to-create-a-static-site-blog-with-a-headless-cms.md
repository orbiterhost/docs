---
layout: minimal
authors:
  - "[Justin Hunter](https://twitter.com/justinhunter)"
date: 2025-05-15
title: How To Create a Static Site Blog With a Headless CMS
description: Static sites are great, but adding a blog often means writing in
heroImage: https://cdn.orbiter.host/ipfs/bafkreiexfs4qkomnlwo52smse3k3sgiukyfstlovqyxij4odotajt5syhe
---

[← Back to Blog Posts](/blog)

# How To Create a Static Site Blog With a Headless CMS

![How To Create a Static Site Blog With a Headless CMS](https://cdn.orbiter.host/ipfs/bafkreiexfs4qkomnlwo52smse3k3sgiukyfstlovqyxij4odotajt5syhe)

I'm currently writing this blog post in a headless CMS. This is the first post on our site written that way. Up until now, Steve and I have written posts in our code editor, or in my case, I've written in Obsidian. Obsidian is great, but it's single player and less accessible than web apps. That's where a headless CMS shines.

But what is a headless CMS?

## Headless CMS

A CMS is a content management system. It does what it says on the tin. It manages content. WordPress, for example, is a CMS. WordPress is designed to be a CMS for your entire site where you never need to touch the code (unless you want to). It's also a server-side platform. A headless CMS on the other hand does not necessarily mean your entire site is run server-side. This is where the "headless" part of the name comes into play.

A headless CMS does not care what your site looks like or where it is hosted. Instead, it creates an application programming interface (API) that allows your site to communicate with the content the headless CMS manages. There are many flavors of this, but these types of CMS tools fall into two broad categories:

1.  Your site fetches content (either at build time or live) from the headless CMS and converts that content into pages on your site

2.  The CMS creates new files for your site to use but your site never needs to make a remote API request


The headless CMS we'll be using falls into the second category. We'll be using [Pages CMS](https://pagescms.org), an open source headless CMS that connects directly to your Github repo. Pages CMS allows you to define a simple configuration file to make sure it knows where your media assets are and where your content is. As you create new content, you will be writing commits back to the Github repository where your site lives.

## Getting Started

We're going to create a static site using Eleventy, but you can use whatever generator you'd like. The results will be similar but the set-up will be different. To get started, you'll need to fire up your terminal app.

First, create a new directory for your site and change into it:

```bash
mkdir my-static-site && cd my-static-site
```

Now, you'll need to initialize your project to use `npm`. Run the following:

```bash
npm init -y
```

When that is complete, you can install Eleventy with this command:

```bash
npm install @11ty/eleventy
```

Ok, now we're ready to set up a very simple site and then demonstrate how Pages CMS will make creating blog post entries dead-simple. Let's add an `index.html` file in the root of our project. You can do this via the terminal or open the project in your favorite code editor. I'll be using VS Code. Inside that file, add the following:

```markdown
---

[← Back to Blog Posts](/blog)
