# Eleventy migration (preview branch)

This branch introduces an Eleventy-generated directory and unified artist pages. The original HTML pages remain in the repository, unchanged on main. The new build uses structured artist records in `src/_data/artists.json`.

## Local testing

```bash
npm install
npm run build
npm run dev
```

The build writes `_site/`. The GitHub Pages workflow is configured for main and will only run after merging; configure repository Pages Source = GitHub Actions when ready. Do not merge before checking the generated site and preserving the existing detailed artist content.

## Migration status

The initial artist records carry the directory summaries and original institutional source links. The generated artist pages are starter profiles, **not replacements for the richer legacy pages**. Legacy pages are retained separately in the repository; manual content migration is still required. Image arrays intentionally remain empty pending verified attribution and rights. The homepage uses designed placeholders rather than a broken live API search.
