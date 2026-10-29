# Project Blueprint

## Overview
This project is a static website for a cleaning company (**Éclat du Sud**), built with **Astro.js** and **Tailwind CSS**. It is designed for performance, accessibility, local search dominance, and high conversion, targeting **Clients** seeking premium cleaning **Prestations** (end-of-construction cleaning, commercial/company premises cleaning, event cleanup, bulky item clearance, post-disaster cleanup, and carpet/sofa upholstery cleaning).

## Project Outline
- **Framework**: Astro.js (v5)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Domain**: `https://eclatdusud.fr`
- **SEO & Search Indexing**: Dynamic metadata, Open Graph, `@astrojs/sitemap`, Schema.org JSON-LD (`LocalBusiness`, `Service`, `FAQPage`), and `robots.txt`.

### Key Files & Directories
- `src/pages/`: Astro route components (Home, Réalisations, Mentions Légales, Contact, Services, Devis Confirmation).
- `src/components/`: Modular UI components (`Navbar`, `Button`, `FAQ`, `Reassurance`, `InterventionZones`, `RealisationsTeaser`, `AvantApres`, `ContactForm`, `Reviews`, `Footer`, `ServiceIcon`).
- `src/assets/`: Brand & service image assets (`services/`, `realisations/`).
- `src/data/`: Structured JS/TS data containing **Prestation** details (`services.js`) and **Réalisation** entries (`realisations.js`, `published-realisations.ts`).
- `scripts/convert-realisations.sh`: Converts `.HEIC` and `.MOV` camera originals into web-ready `.jpg` and `.mp4` derivatives.
- `public/`: Static assets, video derivatives, favicon, CNAME, and `robots.txt`.
- `docs/adr/`: Architecture decision records (`0001`–`0004`).
- `CONTEXT.md`: Ubiquitous language and domain terminology.

---

## Current Plan: Add "Maison à Moussan" Réalisation & "Locaux Professionnels & Entreprises" Prestation

1. **Prestation "Locaux Professionnels & Entreprises" (`locaux-professionnels`) & Refonte "Moquettes, Tapis & Textiles" (`textiles-canapes`)**:
   - Generate hero/card asset `src/assets/services/nettoyage-locaux-professionnels.webp`.
   - Add `locaux-professionnels` in 2nd position in `src/data/services.js`.
   - Refocus `textiles-canapes` as **"Moquettes, Tapis & Textiles"** emphasizing commercial & residential carpet (`moquettes`) cleaning alongside rugs and upholstery.
   - Add professional building/briefcase SVG icon in `src/components/ServiceIcon.astro`.
   - Add "Quotidien" frequency option in `src/components/ContactForm.astro`.
2. **Réalisation "Moussan" (`moussan-2026-10-17`)**:
   - Curate 9 frames (8 media items, including 1 Avant/Après pair for sliding door tracks and 7 singles) from `/Users/mallgrab/Downloads/Maison moussan `.
   - Update `scripts/convert-realisations.sh` to convert Moussan `.HEIC`/`.JPG` originals and rotate sideways landscape frames (`IMG_5539`, `IMG_5542`–`5548`, `IMG_5554`, `IMG_5556`–`5558`, `IMG_5567`–`5576` which were captured with locked portrait orientation) by 90° clockwise so they display upright.
   - Add `moussan-2026-10-17` at the top of `src/data/realisations.js` (Octobre 2026, Aude 11, 5 h 12 sur site, Fin de chantier).
   - Update `src/components/RealisationsTeaser.astro` to feature Moussan in the homepage highlights, and add Moussan to `areaServed` in `src/layouts/Layout.astro` and `src/pages/services/[slug].astro`.
3. **Build & Verification**:
   - Run `./scripts/convert-realisations.sh` and `npm run build` to verify all routes and assets compile cleanly.
