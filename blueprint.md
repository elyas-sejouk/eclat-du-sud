# Project Blueprint

## Overview
This project is a static website for a cleaning company ("Éclat du Sud"), built with **Astro.js** and **Tailwind CSS**. It is designed for performance, accessibility, and high visual appeal, targeting local customers seeking premium cleaning services (Airbnb rotation, end-of-construction cleaning, residential, and event cleanup).

## Project Outline
- **Framework**: Astro.js (v5)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Domain**: `eclatdesud.fr`
- **SEO**: `@astrojs/sitemap` integration for search engine indexing

### Key Files & Directories
- `src/pages/`: Contains the Astro components that act as pages (Home, Mentions Légales, Contact, Services).
- `src/components/`: Modular UI components (Navbar, Button, FAQ, ContactForm, Reviews, Footer).
- `src/data/`: Structured JS data containing service details.
- `src/assets/`: Media resources (images, SVGs).
- `tailwind.config.mjs`: Tailwind design tokens.
- `src/styles/global.css`: Global styles.

## Current Plan: Integrate Astro Sitemap
We will integrate `@astrojs/sitemap` into the project to automatically generate standard XML sitemaps on build, ensuring that all static pages and dynamic services pages are crawled and indexed by search engines.

### Actionable Steps
1. **Install Package**: Add `@astrojs/sitemap` dependency using Yarn.
2. **Configure Integration**: Import and add `sitemap()` to the `integrations` array in `astro.config.mjs`.
3. **Verify Generation**: Build the project locally and verify the resulting `sitemap-index.xml` and `sitemap-0.xml` files.
