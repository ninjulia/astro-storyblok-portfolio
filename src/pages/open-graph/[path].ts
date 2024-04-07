// Leveraging Astro-OG-CANVAS Integration
// https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas

import { OGImageRoute } from 'astro-og-canvas';
import { useStoryblokApi } from '@storyblok/astro';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "published",
});

const stories = data.stories;
const restructuredStories = stories.reduce((acc, story) => {
	acc[story.slug] = {
		title: story.content.title,
		description: story.content.seo_description,
	};
	return acc;
}, {});

export const { getStaticPaths, GET } = OGImageRoute({
	param: 'path',
  pages: restructuredStories,
   getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    // There are a bunch more options you can use here!
  }),
});