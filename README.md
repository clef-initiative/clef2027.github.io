# CLEF 2027

Website for the Conference and Labs of the Evaluation Forum, held on 14–17 September 2027 in Bucharest, Romania.

## Development

The site uses Hugo Extended 0.147.4, Node.js, and npm. The Hugo version is specified in `mise.toml`.

From the repository directory, run:

```sh
git submodule update --init --recursive
mise install
npm ci
mise exec -- hugo server
```

The preview is available at <http://localhost:1313/>. The theme submodule requires GitHub SSH access.

## Content

Pages are maintained in `content/`, shared conference data in `data/`, and images in `assets/img/`. Conference settings and navigation are defined in `config.yaml`.

See [README-content.md](README-content.md) for page formats and shortcodes.

## Build and deployment

To generate the production site in `public/`:

```sh
mise exec -- hugo --environment production --minify
```

GitHub Actions builds and deploys the site to GitHub Pages on pushes to `main`. The workflow can also be run manually.

## Theme

The [CLEF theme](https://github.com/clef-initiative/clef-theme) is included as a Git submodule in `themes/clef-theme`. Site-specific template overrides are maintained in `layouts/`.
