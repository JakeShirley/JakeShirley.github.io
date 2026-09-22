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
- Gallery posts: `src/content/gallery-posts/*.md`, validated by the `galleryPosts`
  collection in `src/content.config.ts`. Set `title`, `description`, `mediaPath`,
  and `category` (`laser-works` or `electronics`). `pubDate` and `image` are
  optional. Write text and links in Markdown below
  the frontmatter. Edit the ordered `media` list in YAML to update the gallery.
  Each entry has `type: photo` or `type: video`, plus `src`, `width`, and `height`.
  `src` is a filename including its extension, relative to `mediaPath`.
  Photos can specify a `preview` filename; videos can specify a `poster` filename.
  Photos require `alt`; videos require `label` and `linkText`. Move whole entries
  within `media` to interleave photos and videos in any order.
  Either type can include `caption: "Your caption here"` for centered Markdown
  beneath the media. Omit it or leave it blank to show no caption.
  Captions are trusted, repository-authored content and may include HTML.
  `src/pages/[...id].astro` renders all entries with `src/layouts/GalleryPost.astro`.
  No `layout` frontmatter is needed. `src/gallery-posts.ts` keeps the existing
  `/laser-works/<filename>/` and `/blog/<filename>/` URLs.
  The homepage groups posts under Laser Works and Electronics by category.
  Laser Works uses optional `order` (default 0), then title; Electronics uses
  newest `pubDate` first. Undated posts remain supported.
- Images and videos: `public/media/`, served unchanged at `/media/`.

Gallery posts appear automatically on the homepage and in `/rss.xml`. The WLED article
is at `/blog/wled-house-numbers/`; `/wled-house-numbers.html` redirects there.
The built homepage also remains available at `/index.html`.

## Deployment

In the repository's **Settings > Pages**, set **Source** to **GitHub Actions**.
The included workflow builds and deploys pushes to `main` or `master`, or can
be run manually. Keep the custom domain set to `jakeshirley.com` in Pages;
`public/CNAME` is included in the build. No DNS change is needed for this migration.

Pico CSS may emit an upstream Sass deprecation warning; it does not prevent builds.