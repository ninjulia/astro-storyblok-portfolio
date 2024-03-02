import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-storyblock-portfolio-template.netlify.app',
	integrations: [
		mdx(),
		sitemap(),
		icon({
			include: {
				feather: ['*'],
			},
		}),
	],
	output: 'server',
	adapter: netlify(),
});
