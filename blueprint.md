# Project Blueprint

## Overview
This project is a static website for a cleaning company ("Éclat de Sud"), built with **Astro.js** and **Tailwind CSS**. It is designed for performance, accessibility, and high visual appeal, targeting local customers seeking premium cleaning services (Airbnb rotation, end-of-construction cleaning, residential, and event cleanup).

## Project Outline
- **Framework**: Astro.js (v5)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Domain**: `eclatdesud.fr`

### Key Files & Directories
- `src/pages/`: Contains the Astro components that act as pages (Home, Mentions Légales, Contact, Services).
- `src/components/`: Modular UI components (Navbar, Button, FAQ, ContactForm, Reviews, Footer).
- `src/data/`: Structured JS data containing service details.
- `src/assets/`: Media resources (images, SVGs).
- `tailwind.config.mjs`: Tailwind design tokens.
- `src/styles/global.css`: Global styles.

## Current Plan: Add Google Analytics
We will add Google Analytics tracking tags to the head section of the site's layout so that all pages are tracked.

### Actionable Steps
1. **Update Layout.astro**: Add the Google Analytics global site tag script block inside the `<head>` of `src/layouts/Layout.astro`.
2. **Verify Integration**: Inspect the browser rendering to verify that the gtag script is successfully outputted and executed.
