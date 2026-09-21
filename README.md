# Jake Shirley

Personal site built with Astro 7 and adapted from the
[Smallworld theme](https://github.com/anaxite/astro-smallworld).
Uses its jade Pico CSS styling, semantic layout, and Markdown collection approach.
The upstream license is in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

## Development

Use Node.js 22.12 or newer (Node 24 recommended).

```sh
npm ci
npm run dev
```

`npm run check` checks types. `npm run build` checks and generates the static
site in `dist/`. `npm run preview` serves that build locally.

## Content

- Home page: `src/pages/index.astro`
- Site metadata and links: `src/settings.ts`
- Shared layout: `src/layouts/Base.astro`
- Theme styles and gallery sizing: `src/styles/main.scss`
- Posts: `src/content/blog/*.md`, with `title` and `description` frontmatter.
  `pubDate` and `image` are optional. Undated migrated content stays undated.
- Images and videos: `public/media/`, served unchanged at `/media/`.

Posts appear automatically on the homepage and in `/rss.xml`. The WLED article
is at `/blog/wled-house-numbers/`; `/wled-house-numbers.html` redirects there.
The built homepage also remains available at `/index.html`.

## Deployment

In the repository's **Settings > Pages**, set **Source** to **GitHub Actions**.
The included workflow builds and deploys pushes to `main` or `master`, or can
be run manually. Keep the custom domain set to `jakeshirley.com` in Pages;
`public/CNAME` is included in the build. No DNS change is needed for this migration.

Pico CSS may emit an upstream Sass deprecation warning; it does not prevent builds.