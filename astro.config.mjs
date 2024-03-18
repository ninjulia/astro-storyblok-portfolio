import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify';
import basicSsl from '@vitejs/plugin-basic-ssl';
import purgecss from 'astro-purgecss';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	image: {
		remotePatterns:
			process.env.VITE_ENVIRONMENT === 'preview'
				? []
				: [
						{
							protocol: 'https',
							hostname: 'a-us.storyblok.com',
						},
				  ],
		service: {
			entrypoint: 'astro/assets/services/sharp',
			config: {
				quality: 'low',
			},
		},
	},
	site: 'https://astro-storyblock-portfolio-template.netlify.app',
	output: process.env.VITE_ENVIRONMENT === 'preview' ? 'server' : 'static',
	adapter: process.env.VITE_ENVIRONMENT === 'preview' ? netlify({ imageCDN: false }) : undefined,
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
				BlogPost: 'storyblok/BlogPost',
				BlogPostList: 'storyblok/BlogPostList',
				Page: 'storyblok/Page',
				About: 'storyblok/About',
				FullWidthFeature: 'storyblok/FullWidthFeature',
				StandardFeature: 'storyblok/StandardFeature',
				Testimonial: 'storyblok/Testimonial',
				Content: 'storyblok/Content',
				FormWrapper: 'storyblok/FormWrapper',
				FormFieldset: 'storyblok/FormFieldset',
				FormInput: 'storyblok/FormInput',
				FormTextarea: 'storyblok/FormTextarea',
				FormCheckbox: 'storyblok/FormCheckbox',
				FormRadioButton: 'storyblok/FormRadioButton',
				WorkRollup: 'storyblok/WorkRollup',
				Teaser: 'storyblok/Teaser',
			},
			apiOptions: {
				region: 'us',
			},
			cache: {
				clear: 'auto',
				type: 'memory',
			},
		}),
		purgecss({
			fontFace: false,
			variables: true,
			safelist: ['active', 'error', 'mt-s', 'mb-0', 'd-flex', 'flex-row', 'align-items-center'],
			content: process.env.VITE_ENVIRONMENT === 'preview' ? [process.cwd() + '/src/**/*.astro'] : [],
		}),
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
