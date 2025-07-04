---
layout: minimal
authors:
  - "[Justin Hunter](https://twitter.com/justinhunter)"
date: 2025-01-08
title: 'How To Build and Host an 11ty Site'
description: "11ty is a fantastic static site generator with tons of community support. Let's see how to build and host an 11ty site."
heroImage: 'https://cdn.orbiter.host/ipfs/bafkreidumpel3e5h2qew3hmzee5363m77u4bbdcrb4xr6utvazy4he7dky'
---
# How To Build and Host an 11ty Site

![How To Build and Host an 11ty Site](https://cdn.orbiter.host/ipfs/bafkreidumpel3e5h2qew3hmzee5363m77u4bbdcrb4xr6utvazy4he7dky)

There are numerous static site generators available, but [11ty](https://www.11ty.dev/) has a soft spot in my heart. I first experienced 11ty when the open source project first launched and I spend a good amount of time building and customizing a friend’s website that was based on 11ty. With over 17,000 stars on Github and a vibrant community, 11ty is a great tool for people who want to build static websites.

Today, we’re going to build a simple static website with 11ty, and we’re going to host it on Orbiter (of course). To get started, we’ll need:

- [An Orbiter free account](https://orbiter.host/pricing)
- Node.js version 18 or higher
- A code editor

## Building the site

Our site will be a simple collection of links. For the youngsters, this was a common thing website did back in the day. They would link to friends’ sites, cool things found on the internet, and just random stuff. It was fun, and Orbiter is bringing fun back to the web. So, a Cool Links site is what we’re building.

To get started, open your [terminal program](https://www.11ty.dev/docs/terminal-window/). Now, create a new folder for our site like this:

```jsx
mkdir cool-links
```

Change into that folder with this command:

```jsx
cd cool-links
```

To set up the necessary dependencies for our site and to allow 11ty to do its magic, we need to initialize our project like this:

```jsx
npm init -y
```

When that’s done, we’ll run one more command to update our project to support more modern syntax:

```jsx
npm pkg set type="module"
```

Now, we can install 11ty as a dependency to our project like this:

```jsx
npm install @11ty/eleventy
```

Now, open your project in the code editor of your choice (I like VS Code, but Steve like Zed). We are now going to create out main page. Create a new file called `index.md`.

Wait, `.md`? Some of you might recognize that this is a markdown file. Aren’t we building a website with HTML?

We are! [One of 11ty’s cool features](https://www.11ty.dev/docs/languages/) is you can create these “template files” in markdown, html, Liquid and more. These are all technically templating languages.

Inside your [`index.md`](http://index.md) file, add the following:

```jsx
# Cool Links
## Because if your link is cool, it stays hot

### Sports
* [Fansided](https://fansided.com/)
* [Korked Bats](https://korkedbats.com/)
* [The Roar](https://www.theroar.com.au/cricket/)

### Tech
* [Steve's Blog](https://stevedylan.dev)
* [Justin's Blog](https://polluterofminds.com)
* [Hacker News](https://news.ycombinator.com)

### Food
* [Eater](https://www.eater.com/)
* [Smitten Kitchen](https://smittenkitchen.com/)
* [A Cozy Kitchen](https://www.acozykitchen.com/)
```

If you’re not familiar with markdown syntax, it’s relatively easy to pick up. You can read more here. Please change the links for your cool links site. Feel free to keep Steve’s and my blogs though. I think we are pretty cool (and both our sites are hosted on Orbiter).

Now, here comes the magic! In your terminal run this command:

```jsx
npx @11ty/eleventy --serve
```

You’ll see that 11ty compiles the markdown into HTML and serves it on `http://localhost:8080`. Open your browser to that address and you’ll see this:

![CleanShot 2025-01-08 at 16.43.04@2x.png](https://cdn.orbiter.host/ipfs/bafkreid3rx66o4oknxh5teypy4kizqud6mddqc2ohto5aoh5fnqkkcnfwm)

This is fine, but we want to add some of that old school web feel with some styling. But how do we style a markdown file?

It’s actually really simple. Back in your [`index.md`](http://index.md) file, add the following to the top of your page:

```jsx