// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://henrychris.github.io",
    base: "/blog",
    integrations: [mdx(), sitemap()],
});
// todo: try out different configs of base
// todo: get some sleep first
// todo: continue blog
// setting the base messed up the routing on my site. /blog became the index route, replacing "/"
// as such, to get to the blogs route, i needed to use localhost:port/blog

// Anyway, here’s the issue: When you set a base  in the Astro config, it acts like the new "index" for your URLs when deployed.

// For example, imagine your file structure is:
// pages/blogs/page-1

// Without setting a base, the URL would be:
// localhost:0000/blogs/page-1

// If you set the base to /blog, the URL changes to:
// localhost:0000/blog/blogs/page-1

// This messed with my URL structure, so to fix it, I moved the files in pages/blogs up one level and replaced the default index and about pages with the blog ones.

// old structure:
// pages
// ├── index.astro
// ├── about.astro
// └── blog
//     ├── index.astro
//     └── [slug].astro

// new structure:
// pages
// ├── index.astro (was in blog folder)
// ├── [slug].astro (was in blog folder)
