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

## Changelog automation

The changelog is generated from the repository's Git commit history. It preserves commit subjects, assigns conservative categories, and links each entry to its source commit.

```sh
npm run changelog                 # preview generated JSON in the terminal
npm run changelog -- --limit 20   # preview up to 20 commits
npm run changelog:write           # write src/data/changelog.generated.json
npm run build                     # validate, regenerate changelog, and build Astro
```

The generator excludes merge commits and defaults to the latest 12 commits. It does not invent summaries from code changes; commit subjects remain the source of truth. The `--write` flag is required to overwrite the generated data file when running the script directly.

## Project structure

- `src/pages/`: German and English routes
- `src/components/`: reusable interface components
- `src/layouts/`: shared page layout and metadata
- `src/data/`: structured profile and hardware data
- `src/styles/`: global design system
- `scripts/`: Node.js content validation and Git-based changelog generation
- `public/`: static assets, custom domain and crawler files

## Content policy

Only verified hardware and profile information should be presented as fact. Unverified cluster topology, employment details, and project claims must be checked before publication. Final3 is outside the scope of this homepage rebuild.

## Deployment

The production deployment workflow is intentionally not enabled in this foundation stage. GitHub Pages settings, build validation, and deployment permissions will be checked before a deployment workflow is introduced.

## Languages

- German: `/`
- English: `/en/`

Both language versions share the same layout and use structured content data in `src/data/profile.js`.
