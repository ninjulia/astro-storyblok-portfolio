import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

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
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
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
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
