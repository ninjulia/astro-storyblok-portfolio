// Data defined in Storyblok under Datasources 

import { useStoryblokApi } from '@storyblok/astro';
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(`cdn/datasource_entries`, {
	datasource: 'social-media'
});

////////////////////////////////////////////////////////////////
export const SOCIALS = data.datasource_entries;