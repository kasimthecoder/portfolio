import Link from "next/link";
import type { Metadata } from "next";

import { blogPosts } from "@/lib/data";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | Kasim Saifi",
  description: "Notes on interface design, web development, and maintaining software projects.",
  alternates: { canonical: canonicalUrl("/blog") },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Blog | Kasim Saifi",
    description: "Notes on interface design, web development, and maintaining software projects.",
    url: canonicalUrl("/blog"),
    siteName: "Kasim Saifi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog | Kasim Saifi",
    description: "Notes on interface design, web development, and maintaining software projects.",
  },
};

export default function BlogPage() {
  return (
    <main className="portfolio blog-page">
      <header className="site-header">
        <nav className="wrap nav-row" aria-label="Primary navigation">
          <Link className="wordmark" href="/" aria-label="Kasim Saifi, home">KS<span className="accent">.</span></Link>
          <Link className="blog-back" href="/">Portfolio <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>
      <div className="wrap blog-content">
        <header className="blog-heading">
          <p className="section-index">NOTES / WRITING</p>
          <h1 className="section-title">Blog</h1>
          <p className="blog-intro">Notes on design, engineering, and building useful software.</p>
        </header>
        <section className="blog-posts" aria-label="Posts">
          {blogPosts.map((post, index) => (
            <article key={post.title} className="blog-post">
              <p className="mono blog-post-meta">{String(index + 1).padStart(2, "0")} / {post.date} / {post.readTime}</p>
              <div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
