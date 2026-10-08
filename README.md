# Ms & Mrs Fabrics and Boutique

A responsive boutique website for Kolathur, Chennai. Its navy lettering, fuchsia accents and blossom logo follow the supplied storefront banner.

Website URL: https://sritharoon05.github.io/mrs_boutique/

## Features

- Responsive desktop and mobile navigation
- Dedicated pages for pattern blouses, high-neck blouses, bridal blouses, Aari work, western gowns and customisation
- WhatsApp enquiries with a prefilled design brief, call and email links, and Google Maps directions
- Local business and service structured data, distinct page titles/descriptions, canonical URLs, sitemap and robots.txt
- Self-hosted fonts, optimised WebP images and keyboard-accessible controls
- Automatic GitHub Pages deployment when main is updated

## Develop

Requires Node.js 20 or later. No package installation is needed.

```sh
npm run build
npm run preview
```

The preview serves the same /mrs_boutique/ base path used on GitHub Pages. Open http://localhost:4173/mrs_boutique/ after starting it.

Edit business details and service copy in src/site.json, templates in scripts/build.mjs, styles in src/styles.css and interactions in src/app.js. Run the build to refresh the tracked dist output. The build keeps image and font assets.

GitHub Pages must be configured to deploy using GitHub Actions. The workflow in .github/workflows/pages.yml builds and publishes dist.

## SEO and business details

The site provides technical SEO foundations; search rankings depend on indexing, competition, business profile quality, links and ongoing content. Add the live site to the boutique's Google Business Profile and verify it in Google Search Console. A custom business domain is a useful next step; update the site origin and canonical URLs if the domain changes.

Opening hours, garment prices, completion times and testimonials are intentionally omitted because they were not supplied. Enquiries ask customers to confirm these with the boutique. The WhatsApp form prepares a message; customers review and send it in WhatsApp.

The two fashion photographs are generated design inspiration, not a portfolio of the boutique's completed work. See design/REFERENCES.md for the visual references and asset information.
