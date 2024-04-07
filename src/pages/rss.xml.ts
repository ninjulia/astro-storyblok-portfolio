// Astro RSS Feed Blog Post Images
// https://webreaper.dev/posts/astro-rss-feed-blog-post-images/
// https://www.storyblok.com/tp/how-to-generate-an-rss-feed-with-a-headless-cms

import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { useStoryblokApi } from "@storyblok/astro";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "published",
    starts_with: "blog", // from the `blog` folder
    content_type: "blogPost", // only `Blog Post` content type
    sort_by: "first_published_at:desc",
});

const posts = data.stories;

export async function GET(context) {
  if(process.env.VITE_ENVIRONMENT === 'preview'){return}
  else{
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    stylesheet: '/rss/pretty-feed-v3.xsl',
    xmlns: {atom: "http://www.w3.org/2005/Atom",},
    items: posts.map((post)=> ({
            title: post.content.title,
            pubDate: post.first_published_at,
            description: post.content.description,
            link: `/${post.full_slug}`,
        })),
    customData: `<language>en-us</language> <atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
  });
}
}