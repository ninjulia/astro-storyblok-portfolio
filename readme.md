# Astro / Storyblok Portfolio Starter Template

## QuickStart Guide

### Prerequisites: Netlify and Storyblok accounts.

- Clone this repo && install dep
- Set up Netlify space with previews branch
- Obtain storyblok user tokens, space id
- Set up environment variables in Netlify as shown in env.example file
- Run ${storyblok build command} to copy all storyblok files from `\_theme` into your storyblok space
- Customize your storyblok website!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Create a simple portfolio template for a Graphic Designer utilizing Astro and Storyblok. Additionally:

- Project Plan & Wireframe
- Use Git & GitHub for vs control
- Projects include photo, summary, and tech used
- Contact section includes fields for name, email, and message
- Include links to social
- Page must be responsive
- Optimize for accessibility

### Screenshot

![screenshot](./screenshot.png?raw=true)

### Links

- Figma Design File: [Astro-Storyblok-Portfolio-Template](https://www.figma.com/file/LVrJnn0kRlSpLVjNqACWny/Astro-Storyblok-Portfolio-Template?type=design&mode=design&t=xzWLbBLyeURBspv6-1)
- GitHub Repo URL: [astro-storyblok-portfolio](https://github.com/ninjulia/astro-storyblok-portfolio)
- Live Site URL: [https://astro-storyblock-portfolio-template.netlify.app/](astro-storyblock-portfolio-template.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0630c295-c268-4eb0-a642-8df3be4e5a7d/deploy-status)](https://app.netlify.com/sites/astro-storyblock-portfolio-template/deploys)

## My process

### Built with

#### Design Resources

- [utopia.fyi](https://utopia.fyi/)
- [Google Fonts: Bebas Neue & Nunito Sans](https://fonts.google.com/)
- [Icons from Feather](https://feathericons.com/)
- [Astro Icon](astro-og-canvas)

#### Framework, CMS, and Hosting

- [Astro](https://astro.build/)
- [Storyblok](https://www.storyblok.com/)
- [Netlify](https://www.netlify.com/)

#### Tech and Tooling

- SCSS
- [Lightning CSS via Vite plugin](https://lightningcss.dev/docs.html#with-vite)
- [PurgeCSS (remove unused classes in production only)]()
- [SSL for Localhost](https://www.npmjs.com/package/@vitejs/plugin-basic-ssl)

#### SEO Focus

- [Astro RSS](https://www.npmjs.com/package/@astrojs/rss)
- [Astro Sitemap](https://www.npmjs.com/package/@astrojs/sitemap)
- [Dynamically Generated Robots.txt](https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage)
- [Astro-OG-Canvas to generate OpenGraph images](https://www.npmjs.com/package/astro-og-canvas)

### What I learned

This project was initialized as a way for me to familiarize myself with the Astro framework. I chose to incorporate Storyblok as a CMS because I liked the idea of a visual-focused editing experience which is especially fitting for a Graphic Designer's portfolio. It helped that Astro has a write up on integrating with Storyblok as well. I started with the Astro blog template which provides support for rss and sitemaps out of the box. I then layered on Storyblok by converting the Astro components I had built into something Storyblok could work with.

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
