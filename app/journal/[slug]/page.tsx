import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, journalPosts } from "../../../lib/journal";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Build with Hannah",
    };
  }

  return {
    title: `${post.title} | Build with Hannah`,
    description: post.blurb,
    openGraph: {
      title: post.title,
      description: post.blurb,
      type: "article",
      images: ["/assets/images/hannah-luna.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.blurb,
      images: ["/assets/images/hannah-luna.jpeg"],
    },
  };
}

export default async function JournalPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const words = [post.intro ?? "", ...post.paragraphs].join(" ").trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.round(words / 220));

  return (
    <section className="section">
      <article className="container content-narrow post">
        <p className="meta">
          {post.category} • {post.date} • {readTime} min read
        </p>
        <h1>{post.title}</h1>
        {post.subtitle ? <p className="post-subtitle">{post.subtitle}</p> : null}

        {post.intro ? <p className="post-intro">{post.intro}</p> : null}

        <div className="post-content">
          {post.paragraphs.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>

        {post.next ? <p className="post-next">Next: {post.next}</p> : null}

        <p className="post-support muted">
          If this post resonated, you can follow the best reading path on the{" "}
          <Link className="text-link" href="/start-here">
            start here page
          </Link>
          .
        </p>

        <p>
          <Link className="text-link" href="/journal">
            Back to Journal
          </Link>
        </p>
      </article>
    </section>
  );
}
