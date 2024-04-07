# Astro / Storyblok Portfolio Starter Template

> **Prerequisites: [Netlify](https://www.netlify.com/) and [Storyblok](https://www.storyblok.com/) accounts.**

**Template Includes**

- Custom HTML and CSS and auto light/dark theme with the following pages:

  - Home page
  - 3 Sample "Work" Showcase Pages
  - Blog Landing Page
  - 4 Sample Blog Posts
  - Form with themed inputs

- Storyblok elements ready to upload to your Space:

  - Components
  - Stories
  - Datasources

- Optimized for A11y compliance SEO
  - A11y friendly coding
  - A11y friendly color contrasts
  - RSS
  - Sitemap
  - Robots.txt
  - Automatic OpenGraph/Twitter Image generation
  - Optimized Images, CSS, HTML and SSG for fast loading in production

This template leverages Astro to run a portfolio site on Storyblok's CMS. Support for RSS, Sitemaps, OpenGraph images, Robots.txt and static site generation in production is already configured. Server side rendering is configured for a Previews branch so editors in Storyblok can see their changes in real time without effecting performance for your visitors. After you clone this repo, set up your Storyblok Space and Netlify site following the steps detailed below. When you're finished, you should have a site within Storyblok CMS where you can focus on content. This template includes sample pages, blog posts, with images and content generated from Copilot AI.

## Quick Start Guide

Below is an overview of the steps required for the first build of your site. [See a full walk-through here](https://astro-storyblock-portfolio-template.netlify.app/getting-started-guide/).

### Initialize Project

1. Rename `example.env` to `.env`.
2. Update line 6 in `./src/pages/robots.txt.ts` to `Allow: /`
3. Replace the favicon files in `public/` with your own. Provide `favicon-dev.ico` and `icon-dev.svg` to use on the previews branch.
4. Git push and make sure you have both `main` and `previews` branches in your github repository.

### Set up Storyblok

_The build will fail if you don't set up your Storyblok content first_

1. In your Storyblok Space, rename or delete any existing stories named "Home", "Blog" or "Work". This will avoid naming conflicts in the next step and allow all sample data to be uploaded. _Optional: delete all existing components in the Block Library_
2. Add new Datasources for `Brand Colors`, `Menu Items`, `Site Consts` and `Social Media`. _Optional: delete all existing Datasources_
3. Import the .CSV files from `./_theme/datasources` for each.
4. Grab your Storyblok Space Id and create a Personal Access Token, add these values to your .env file.
5. In your terminal, run the following to login and push the components to your Space:

```
  npx storyblok login
  npx storyblok push-components --space <YOUR_STORYBLOK_SPACE_ID> _theme/components.json
```

6. In your terminal run `npx run import` to import starter Stories using the components you just added.

### Prep your Netlify Site and connect to Storyblok

1. In Netlify, add a new site from your Github repo.
2. Make sure Form detection is enabled.
3. Add `previews` as a branch deploy.
4. In Storyblok, add your live and preview urls to **Settings** > **Visual Editor**. Make sure to set your previews branch as the default view.
5. In Netlify, add STORYBLOK_ACCESS_TOKEN Environmental variable and use different values for each deploy context. Use the Preview Storyblok Access Token value on the `previews` branch. Use the Public Storyblok Access Token on Production and Deploy Previews branches.
6. Add VITE_ENVIRONMENT again with different values for each deploy context. Enter a value of "production" in Production and Deploy Previews. Enter a value of "preview" for the Previews branch.
7. Add build a hook on your `main` branch, add to Storyblok Webhooks. Select all of the events under **Story** and **Datasource** as triggers.

### Customizing your Site

1. Upload your own assets.
2. Add a folder for `Work` and `Blog`. Move the stories with the Page content type to the work folder and the rest to the blog folder.
3. Add, remove or update pages to fit your needs.
4. Customize the datasources with your brand colors, link to logo, social media urls, and customize your site navigation.

### Editing on Local Host

1. Run `npx netlify dev` to view your changes using the variables stored in Netlify.
2. Before you commit any changes, run `npx netlify build --context production` to build a local copy of your production site.

## Table of contents

- [Project Goals](#project-goals)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Project Goals

Create a simple portfolio template for a Graphic Designer utilizing Astro and Storyblok. Additionally:

- Optimize for accessibility
- Allow editors to see their changes in real-time
- Optimize for SEO
- Optimize for fast load times
- Add Project Documentation for those with limited familiarity with the command line, Netlify and Storyblok.

### Screenshot

![screenshot](./screenshot.png?raw=true)

### Links

- Figma Design File: [Astro-Storyblok-Portfolio-Template](https://www.figma.com/file/LVrJnn0kRlSpLVjNqACWny/Astro-Storyblok-Portfolio-Template?type=design&mode=design&t=xzWLbBLyeURBspv6-1)
- GitHub Repo URL: [astro-storyblok-portfolio](https://github.com/ninjulia/astro-storyblok-portfolio)
- Sample Site URL: [https://astro-storyblock-portfolio-template.netlify.app/](astro-storyblock-portfolio-template.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0630c295-c268-4eb0-a642-8df3be4e5a7d/deploy-status)](https://app.netlify.com/sites/astro-storyblock-portfolio-template/deploys)

## My process

This project was initialized as a way for me to familiarize myself with the Astro framework. I chose to incorporate Storyblok as a CMS because I liked the idea of a visual-focused content editing experience. It helped that Astro has official documentation on integrating with Storyblok as well. I started with the Astro blog template which provides support for RSS and sitemaps out of the box. I then layered on Storyblok by converting the Astro components I had built into something Storyblok could work with. Once that logic was completed, I added support for auto-generating OpenGraph images.

### Built with:

#### Design Resources

- [utopia.fyi](https://utopia.fyi/)
- [Google Fonts: Bebas Neue & Nunito Sans](https://fonts.google.com/)
- [Icons from Feather](https://feathericons.com/)
- [Astro Icon](astro-og-canvas)
- [Stephanie Eckles' a11y-color-tokens](https://github.com/5t3ph/a11y-color-tokens)

#### Framework, CMS, and Hosting

- [Astro](https://astro.build/)
- [Storyblok](https://www.storyblok.com/)
- [Netlify](https://www.netlify.com/)

#### Tech and Tooling

- SCSS
- [Lightning CSS via Vite plugin](https://lightningcss.dev/docs.html#with-vite)
- [PurgeCSS (remove unused classes in production only)](https://www.npmjs.com/package/purgecss)
- [SSL for Localhost](https://www.npmjs.com/package/@vitejs/plugin-basic-ssl)

#### SEO Focus

- [Astro RSS](https://www.npmjs.com/package/@astrojs/rss)
- [Astro Sitemap](https://www.npmjs.com/package/@astrojs/sitemap)
- [Dynamically Generated Robots.txt](https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage)
- [Astro-OG-Canvas to generate OpenGraph images](https://www.npmjs.com/package/astro-og-canvas)

### Continued development

- Astro Page Transitions
- Use Custom Captcha instead of Netlify's for custom styling
- Add Javascript slider for Testimonials section
- Allow users to specify google fonts choices

## Author

- GitHub- [Julia](https://github.com/ninjulia)

## Acknowledgments

Below is a list of assets and articles that I leveraged in the production of this project:

- [Getting the Visual Editor to work for Storyblok + Astro](https://dev.to/sandrarodgers/getting-the-visual-editor-to-work-for-storyblok-astro-2gja/)
- [Data migration from any platform to Storyblok](https://www.storyblok.com/tp/data-migration-from-any-platform-to-storyblok#get-relevant-access-tokens-from-storyblok)
- [Storyblok import and export](https://github.com/storyblok/example-scripts/blob/master/import-export-csv/README.md)
- [Tango for How-to Guide Documentation](https://www.tango.us/)
