// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

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