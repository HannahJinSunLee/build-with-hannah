"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { JournalPost } from "../../lib/journal";

type Props = {
  posts: JournalPost[];
};

export default function JournalClient({ posts }: Props) {
  const [selected, setSelected] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const filtered = useMemo(() => {
    if (selected === "All") return posts;
    return posts.filter((p) => p.category === selected);
  }, [posts, selected]);

  const [featured, ...rest] = filtered;

  return (
    <section className="section journal-page">
      <div className="container">
        <div className="journal-head">
          <h1>Journal</h1>
          <p className="muted">Tech, fitness, and mindset rebuild in real time.</p>
        </div>

        <div className="pill-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${cat === selected ? "active" : ""}`}
              onClick={() => setSelected(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <article className="card">
          <h3>Weekly Reset Checklist</h3>
          <ul className="checklist">
            <li>Write one honest entry about what worked and what did not</li>
            <li>Ship one small change (code, copy, or layout)</li>
            <li>Move for 20–30 minutes and log it</li>
            <li>Choose one promise for the next 7 days</li>
          </ul>
        </article>

        {featured ? (
          <article className="card featured-post">
            <p className="meta">
              Featured • {featured.category} • {featured.date}
            </p>
            <h2>
              <Link href={`/journal/${featured.slug}`}>{featured.title}</Link>
            </h2>
            {featured.subtitle ? <p className="muted">{featured.subtitle}</p> : null}
            <p>{featured.blurb}</p>
            <p>
              <Link className="text-link" href={`/journal/${featured.slug}`}>
                Read full entry
              </Link>
            </p>
          </article>
        ) : null}

        {rest.length ? (
          <div className="card-grid journal-grid">
            {rest.map((post) => (
              <article key={post.slug} className="card card-link">
                <p className="meta">
                  {post.category} • {post.date}
                </p>
                <h3>
                  <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.subtitle ? <p className="muted">{post.subtitle}</p> : null}
                <p className="muted">{post.blurb}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
