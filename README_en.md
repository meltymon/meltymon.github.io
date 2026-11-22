# meltymon.org

Bilingual technical portfolio built with Astro and Node.js. The site is generated as static HTML and is intended for GitHub Pages hosting.

## Requirements

- Node.js 26.13.1 (see `.nvmrc`)
- npm 12
- Git

## Local development

```sh
nvm use
npm install
npm run dev
```

Astro prints the local development URL after startup.

## Validation and production build

```sh
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Project structure

- `src/pages/`: German and English routes
- `src/components/`: reusable interface components
- `src/layouts/`: shared page layout and metadata
- `src/data/`: structured profile and hardware data
- `src/styles/`: global design system
- `scripts/`: Node.js automation planned for later implementation steps
- `public/`: static assets, custom domain and crawler files

## Content policy

Only verified hardware and profile information should be presented as fact. Unverified cluster topology, employment details, and project claims must be checked before publication. Final3 is outside the scope of this homepage rebuild.

## Deployment

The production deployment workflow is intentionally not enabled in this foundation stage. GitHub Pages settings, build validation, and deployment permissions will be checked before a deployment workflow is introduced.

## Languages

- German: `/`
- English: `/en/`

Both language versions share the same layout and use structured content data in `src/data/profile.js`.
