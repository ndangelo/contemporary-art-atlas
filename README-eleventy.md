# Contemporary Art Atlas — Eleventy migration

The migration branch contains the new Eleventy directory and generated artist summaries, plus **all 12 original detailed HTML artist profiles** copied into `src/<artist-slug>.html`. Generated profiles link to the corresponding complete research profile. Do not delete those legacy files until their full content has been carefully migrated and reviewed.

## Build

```bash
npm install
npm run build
npm run dev
```

The output is `_site/`. The project uses the GitHub Pages path prefix `/contemporary-art-atlas/`.

## Validation and publishing

The `Eleventy migration validation` GitHub Actions workflow runs on pushes to `eleventy-migration` and pull requests targeting `main`. It checks the generated directory, theme assets, generated artist page and original detailed profile, and uploads the site as a build artifact. **It intentionally does not deploy.** Review the workflow run and artifact before merging. A separate Pages deployment workflow and repository Pages configuration will be required for production deployment.

## Theme

The shared `src/assets/atlas-theme.css` uses warm white `#F8F7F4`, charcoal `#202124`, slate gray `#69727A`, and blue-green `#176F91`.

## Remaining work

- Confirm the GitHub Actions build succeeds and inspect the output.
- Consolidate detailed legacy research into structured artist pages without losing citations.
- Verify Commons image URLs, author attribution, artwork rights, and license metadata before wider publication.
- Expand the video documentation and scholarly references with verified source details.
- Decide on and test a safe GitHub Pages deployment cutover.
