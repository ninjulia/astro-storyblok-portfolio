// Data defined in Storyblok under Datasources 

import { useStoryblokApi } from '@storyblok/astro';
const storyblokApi = useStoryblokApi();

// const { data } = await storyblokApi.get(`cdn/datasource_entries`, {
// 	version: process.env.VITE_ENVIRONMENT === 'preview' ? 'draft' : 'published',
// 	datasource: 'brand-colors'
// });
// console.log(data.datasource_entries)
// ////////////////////////////////////////////////////////////////
// export const PRIMARY = data.datasource_entries.filter((object) => object.name === 'Primary')[0].value;
// export const SECONDARY = data.datasource_entries.filter((object) => object.name === 'Secondary')[0].value;
// export const LIGHT = data.datasource_entries.filter((object) => object.name === 'Light')[0].value;
// export const DARK = data.datasource_entries.filter((object) => object.name === 'Dark')[0].value;
