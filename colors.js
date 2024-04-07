const fs = require('fs');
const StoryblokClient = require('storyblok-js-client');
const { loadEnv } = require('vite');
const env = loadEnv('', process.cwd(), 'STORYBLOK');

const Storyblok = new StoryblokClient({
	accessToken: env.STORYBLOK_TOKEN,
});

//* Data defined in Storyblok under Datasources
Storyblok.get(`cdn/datasource_entries`, {
	datasource: 'brand-colors',
})
	.then((response) => {
		const datasource_entries = response.data.datasource_entries;
		const brandColors = datasource_entries.map((color) => ({
			name: color.name.toLowerCase().replace(/ /g, '-'),
			color: color.value,
		}));
		const data = JSON.stringify(brandColors, null, 2);
		fs.writeFile('_theme/color-tokens.js', `module.exports = ${data}`, 'utf8', (err) => {
			if (err) {
				console.error('Error writing file:', err);
				return;
			}
			console.log('Data has been saved to colorsData.json');
		});
	})
	.catch((error) => {
		console.log(error);
	});
