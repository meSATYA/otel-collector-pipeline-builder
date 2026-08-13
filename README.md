# OTel Collector Contrib Component Explorer

A static React interface for browsing OpenTelemetry Collector Contrib receivers,
processors, exporters, extensions, and connectors.

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The static output is written to `dist/`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository using the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push a commit to `main`, or run **Deploy to GitHub Pages** from the Actions tab.

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site.
The Vite configuration uses relative asset paths, so it works for both user sites
and repository sites without changing the repository name.

## Project structure

- `app/page.tsx` — component data and interface
- `app/globals.css` — responsive visual design
- `src/main.tsx` — browser entry point
- `public/` — static assets
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment

## Brand icons

Recognized technologies use locally bundled SVG marks from [Simple Icons](https://simpleicons.org/),
whose entries link to official brand sources and guidelines. Generic Collector components retain
their category symbol so the interface does not imply a false brand association. The Simple Icons
CC0 license and trademark disclaimer are included under `public/logos/`.
AWS, Azure, and Oracle marks are bundled from the Devicon project because those
marks are not present in the current Simple Icons release. Cloud-provider marks
are used only for component names beginning with the corresponding provider name.
