# Kasim Saifi Portfolio

A Swiss editorial portfolio built with Next.js 15 and TypeScript. Portfolio content is defined in `lib/data.ts`.

## Getting Started

```bash
bun install
bun run dev
```

Open `http://localhost:3000` to view the site.

## Content

Edit projects, profile details, navigation, skills, process steps, and static blog entries in `lib/data.ts`.

## Search visibility

- The canonical production origin is `https://www.kasimsaifi.in/`.
- `app/robots.ts` allows crawlers and points to `app/sitemap.ts`.
- The sitemap contains only the indexable homepage. `/blog` is intentionally `noindex` while it contains summaries without full article pages.
- The homepage’s Person, ProfilePage, WebSite, and project SoftwareApplication JSON-LD is rendered from the same static profile and project data as the visible page.
- No analytics scripts or search-engine credentials are committed.

To enable HTML-tag ownership verification, add `GOOGLE_SITE_VERIFICATION` and/or `BING_SITE_VERIFICATION` to the production environment using the token value supplied by each service, then rebuild and deploy. These values are emitted only in the corresponding public verification meta tag. DNS verification does not require an environment variable.

In Google Search Console, add the `https://www.kasimsaifi.in/` URL-prefix property (or verify the `kasimsaifi.in` Domain property via DNS), then submit `https://www.kasimsaifi.in/sitemap.xml`. Inspect the homepage and review indexing, query, click, impression, CTR, and position reports after data becomes available.

In Bing Webmaster Tools, add the canonical site, verify it using DNS or the HTML-tag value, and submit the same sitemap URL. Review URL inspection, crawl/indexing reports, and query impressions, clicks, CTR, and position there.

Verification, sitemap submission, and URL inspection do not guarantee indexing or ranking. The repository has no Search Console or Bing account credentials, so those account steps remain manual.

## Routes

- `/` is the public portfolio.
- `/blog` displays the static writing entries from `lib/data.ts`.

## Scripts

- `bun run dev` starts the development server.
- `bun run build` creates a production build.
- `bun run start` serves the production build.
- `bun run typecheck` runs TypeScript checks.
# portfolio
