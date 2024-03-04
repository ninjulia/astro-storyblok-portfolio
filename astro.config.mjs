import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	image: { domains: ['https://a-us.storyblok.com/'] },
	site: 'https://astro-storyblock-portfolio-template.netlify.app',
	output: env.VITE_ENVIRONMENT === 'preview' ? 'server' : 'static',
	adapter: env.VITE_ENVIRONMENT === 'preview' ? netlify() : undefined,
	integrations: [
		mdx(),
		sitemap(),
		icon({
			include: {
				feather: ['*'],
			},
		}),
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			bridge: env.VITE_ENVIRONMENT === 'preview' ? true : false,
			components: {
				blogPost: 'storyblok/BlogPost',
				blogPostList: 'storyblok/BlogPostList',
				page: 'storyblok/Page',
				Config: 'storyblok/Config',
				About: 'storyblok/About',
				FullWidthFeature: 'storyblok/FullWidthFeature',
				Hero: 'storyblok/Hero',
				StandardFeature: 'storyblok/StandardFeature',
				Testimonial: 'storyblok/Testimonial',
				Overview: 'storyblok/Overview',
				FormWrapper: 'storyblok/FormWrapper',
				FormInput: 'storyblok/FormInput',
				FormTextarea: 'storyblok/FormTextarea',
				FormCheckbox: 'storyblok/FormCheckbox',
			},
			apiOptions: {
				region: 'us',
			},
		}),
	],
});
