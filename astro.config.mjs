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
	//image: { domains: ['https://a-us.storyblok.com/'] },
	site: 'https://astro-storyblock-portfolio-template.netlify.app',
	output: 'server',
	adapter: netlify(),
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
			// bridge: env.VITE_ENVIRONMENT === 'preview' ? true : false,
			bridge: true,
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
		}),
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
