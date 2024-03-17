# Astro / Storyblok Portfolio Starter Template

> Currently in Proof-of-Concept Phase; Project set-up instructions to follow.

This project is an exercise to create a portfolio site leveraging the Astro framework and Storyblok for a CMS. The project was split into 3 parts: design, coding and implementation.

**Design** The responsive design was built utilizing [utopia.fyi](https://utopia.fyi/) grids and sizing as a starting point. The design was built out in Figma leveraging [Utopian project kickstarter](https://www.figma.com/community/file/1122903924123950023/utopian-project-kickstarter). You can [review the design here](https://www.figma.com/file/LVrJnn0kRlSpLVjNqACWny/Portfolio-Template---2024?type=design&node-id=4096-169&mode=design&t=wgZjKxGTdW7JJnt1-0).

**Code** I began the code portion of the project by porting the Figma variables into SCSS files. I added Stephanie Eckles's [a11y-color-tokens](https://github.com/5t3ph/a11y-color-tokens) to expand upon the color theme used in the Figma starter file and later allow users to quickly generate themes with accessible color combos. I first set up light and dark modes based on user preferences, styled up all typography, and set up links, buttons, and form input styles before building out components to combine into pages. I then ported the HTML into a new Astro project, leveraging their framework as much as possible to dynamically build pages.

**Implementation** Currently working through the push to Netlify, hooking up a web form, and implementing Storyblok CMS

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

Create a layout using HTML, CSS, and JS. Additionally:

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

- Semantic HTML5 markup
- CSS variable properties
- Vanilla Javascript
- CSS Grid
- Flexbox
- Mobile-first workflow
- Accessibility / Color Contrast
- Astro
- Storyblok
- SCSS

### What I learned

### Continued development

- Astro Page Transitions
- Use Custom Captcha instead of Netlify's for custom styling
- Add Javascript slider for Testimonials section
- Allow users to specify google fonts choices

## Author

- GitHub- [Julia](https://github.com/ninjulia)

## Acknowledgments

Below is a list of assets and articles that I leveraged in the production of this project:

- [The A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [A CSS Approach to Trap Focus Inside of an Element](https://css-tricks.com/a-css-approach-to-trap-focus-inside-of-an-element/)
- [Accessible Modal Dialog](https://scottaohara.github.io/accessible_modal_window/)
- [utopia.fyi](https://utopia.fyi/)
- [Google Fonts: Bebas Neue & Heebo](https://fonts.google.com/)
- icons from Feather
