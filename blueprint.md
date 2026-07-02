# Project Blueprint

## Overview
This project is a static website for a cleaning company ("Éclat du Sud"), built with **Astro.js** and **Tailwind CSS**. It is designed for performance, accessibility, and high visual appeal, targeting local customers seeking premium cleaning services (Airbnb rotation, end-of-construction cleaning, residential, and event cleanup).

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

## Current Plan: Rename Brand to "Éclat du Sud" & Add Google Analytics
We will update all site references from "Éclat de Sud" to "Éclat du Sud" (and social/domain handles depending on confirmation) and add Google Analytics to the head section of the site's layout.

### Actionable Steps
1. **Update layout, components, and pages**: Replace brand text "Éclat de Sud" and "ÉCLAT DE SUD" with "Éclat du Sud" and "ÉCLAT DU SUD".
2. **Add Google Analytics**: Insert the analytics tags into `Layout.astro`.
3. **Verify Integration**: Inspect the browser rendering to verify changes.
