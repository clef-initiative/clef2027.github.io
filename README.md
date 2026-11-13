# CLEF 2027 website

Hugo site for CLEF 2027, September 14–17, 2027, Bucharest, Romania.
Content editing guidance is in [README-content.md](README-content.md).

## Local development

Use the mise configuration to select **Hugo Extended 0.147.4**, matching the GitHub Pages workflow. Node.js and npm are also required.

```sh
git submodule update --init --recursive
npm ci
mise exec -- hugo server --disableFastRender
```

Open the localhost URL printed by Hugo. The theme submodule uses SSH, so GitHub SSH access must be configured.

Copied 2026 pages are drafts. Use `--buildDrafts` only when intentionally reviewing them; draft mode includes obsolete content.

## Production verification

Build into a fresh output directory to avoid leftover files from earlier builds:

```sh
npm audit
mise exec -- hugo --environment production --minify --destination .build/production
```

The GitHub Pages workflow builds `public/` from a fresh checkout with the same Hugo version. Its npm installation fails the build on errors. Deployment is configured for pushes to `main` or manual dispatch.

## Theme updates

The theme is a pinned Git submodule. Review upstream changes before updating its revision. Site-specific template overrides belong in `layouts/`, so adapting this site does not require changing the theme checkout.
