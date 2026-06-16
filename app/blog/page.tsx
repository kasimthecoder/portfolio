import Link from "next/link";

import { blogPosts } from "@/lib/portfolio";

export const metadata = {
  title: "Blog | Kasim Saifi",
  description: "Writing and notes by Kasim Saifi.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[700px] px-6 py-8 sm:px-8 sm:py-12">
        <div className="animate-fade-in space-y-14">
          <header className="space-y-8">
            <nav className="flex gap-5 text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Portfolio
              </Link>
              <Link href="/dashboard" className="hover:text-white">
                Dashboard
              </Link>
            </nav>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
                Blog
              </h1>
              <p className="text-base leading-7 text-white/70">
                Placeholder writing UI for future posts. No database is wired to
                this section yet.
              </p>
            </div>
          </header>

          <section className="space-y-10" aria-label="Posts">
            {blogPosts.map((post) => (
              <article key={post.title} className="space-y-2">
                <p className="text-sm text-white/50">
                  {post.date} / {post.readTime}
                </p>
                <h2 className="text-xl font-medium tracking-normal">
                  {post.title}
                </h2>
                <p className="text-base leading-7 text-white/70">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
