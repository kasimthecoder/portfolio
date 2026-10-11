import type { Metadata } from "next";

import { HOME_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found | Kasim Saifi",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
  openGraph: { title: "Page not found | Kasim Saifi", url: HOME_URL },
};

export default function NotFound() {
  return (
    <main className="portfolio">
      <section className="editorial-section wrap" aria-labelledby="not-found-heading">
        <p className="section-index">404 / NOT FOUND</p>
        <h1 id="not-found-heading" className="section-title">That page isn&apos;t here.</h1>
        <p className="not-found-copy">The address may have changed, or the page may no longer exist.</p>
        <a className="not-found-link" href={HOME_URL}>Back to the portfolio <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
