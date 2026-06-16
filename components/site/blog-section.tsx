import { Section } from "@/components/site/section";
import { blogPosts } from "@/lib/portfolio";

type BlogSectionProps = {
  posts: typeof blogPosts;
};

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <Section id="blog" label="Blog">
      <div className="space-y-9">
        {posts.map((post) => (
          <article key={post.title} className="space-y-2">
            <p className="text-sm text-white/50">
              {post.date} / {post.readTime}
            </p>
            <h2 className="text-xl font-medium tracking-normal">{post.title}</h2>
            <p className="text-base leading-7 text-white/70">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
