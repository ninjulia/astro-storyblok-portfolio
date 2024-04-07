// Data defined in Storyblok at 

import { useStoryblokApi } from '@storyblok/astro';
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(`cdn/datasource_entries`, {
	datasource: 'menu-items'
});

////////////////////////////////////////////////////////////////
export const LINKS = data.datasource_entries;