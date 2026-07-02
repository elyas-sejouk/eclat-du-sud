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

## Current Plan: Redesign Mobile Navigation
We will redesign the mobile navigation menu in `src/components/Navbar.astro` to provide a premium, modern, drawer-style interface with a blurred backdrop, scroll locking, and enriched brand contact details, while strictly respecting accessibility (A11Y) best practices.

### Actionable Steps
1. **Prepare the Layout & Styling**: Update `Navbar.astro`'s structure to use a slide-out drawer from the right, a custom blurred backdrop overlay, and a premium navy + gold look.
2. **Enrich Drawer Content**: Add navigation links, contact details (phone, sectors, hours), and clear call-to-actions inside the drawer.
3. **Refactor Hamburger Toggle**: Build CSS-driven transitions for the hamburger lines.
4. **Implement JavaScript Behavior**: Manage open/close classes, prevent background body scroll, close on link or backdrop clicks, and handle Escape keys and keyboard trapping/focus.
5. **Verify Navigation**: Manually inspect responsiveness, transitions, close behavior, and ensure zero runtime errors.
