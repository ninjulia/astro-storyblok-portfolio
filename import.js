const path = '_theme/stories';
const fs = require('fs');
const StoryblokClient = require('storyblok-js-client');
const { loadEnv } = require('vite');
const env = loadEnv('', process.cwd(), 'STORYBLOK');

const Storyblok = new StoryblokClient({
	oauthToken: env.STORYBLOK_ACCESS_TOKEN,
	cache: {
		clear: 'auto',
		type: 'memory',
	},
});

//TODO: replace parent_id in the /work and /blog files with folder id (from var in .env for easy management)
// Loop through all the files in the directory
fs.readdir(path, function (err, files) {
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}
	files.forEach(function (file) {
		//get file content
		const content = fs.readFileSync(path + '/' + file, 'utf8');

		//post to storyblok
		Storyblok.post(`/spaces/${env.STORYBLOK_SPACE_ID}/stories/`, {
			story: { ...JSON.parse(content) },
			publish: 1,
		})
			.then((response) => {
				console.log(`${response.data.story.name}: ${response.status}`);
			})
			.catch((error) => {
				console.log(error);
			});
	});
});
