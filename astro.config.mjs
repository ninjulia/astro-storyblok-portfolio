import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify';
import basicSsl from '@vitejs/plugin-basic-ssl';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	image: {
		// domains: process.env.VITE_ENVIRONMENT === 'preview' ? [] : ['astro.build'],
		remotePatterns: [
			{
				protocol: 'https',
				//hostname: '**.a-us.storyblok.com/*',
			},
		],
		service: {
			entrypoint: 'astro/assets/services/sharp',
			config: {
				quality: 'low',
			},
		},
	},
	site:
		process.env.VITE_ENVIRONMENT === 'preview'
			? 'https://previews--astro-storyblock-portfolio-template.netlify.app/'
			: 'https://astro-storyblock-portfolio-template.netlify.app',
	output: process.env.VITE_ENVIRONMENT === 'preview' ? 'server' : 'static',
	adapter: process.env.VITE_ENVIRONMENT === 'preview' ? netlify() : undefined,
	integrations: [
		mdx(),
		sitemap(),
		icon({
			include: {
				feather: ['*'],
			},
		}),
		storyblok({
			accessToken: process.env.STORYBLOK_TOKEN,
			useCustomApi: false,
			bridge: process.env.VITE_ENVIRONMENT === 'preview' ? true : false,
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
				FormFieldset: 'storyblok/FormFieldset',
				FormInput: 'storyblok/FormInput',
				FormTextarea: 'storyblok/FormTextarea',
				FormCheckbox: 'storyblok/FormCheckbox',
				FormRadioButton: 'storyblok/FormRadioButton',
			},
			apiOptions: {
				region: 'us',
			},
			cache: {
				clear: 'auto',
				type: 'memory',
			},
		}),
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
