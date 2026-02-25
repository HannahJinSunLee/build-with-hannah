import Link from "next/link";
import Image from "next/image";
import { journalPosts } from "../lib/journal";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Build with Hannah",
  description:
    "This is where I rebuild. Learning in public, building projects, and proving that starting again is possible.",
  openGraph: {
    title: "Build with Hannah",
    description:
      "This is where I rebuild. Learning in public, building projects, and proving that starting again is possible.",
    images: ["/assets/images/hannah-luna.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Hannah",
    description:
      "This is where I rebuild. Learning in public, building projects, and proving that starting again is possible.",
    images: ["/assets/images/hannah-luna.jpeg"],
  },
};

export default function HomePage() {
  const recentPosts = journalPosts.slice(0, 3);

  return (
    <>
      <section className="hero section">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Welcome to my online journal.</p>
            <h1 className="hero-title">Hello, I&apos;m Hannah</h1>
            <p>
              This is where I&apos;m learning in public, building projects, and proving that starting again is possible. My cat Luna is here to support every restart and every small win.
            </p>
            <p className="hero-note">If you feel late or stuck, you are not alone.</p>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="/work-with-me">
                Work With Me
              </Link>
              <Link className="btn btn-secondary" href="/start-here">
                Start Here
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <Image
              src={`${prefix}/assets/images/hannah-luna.jpeg`}
              alt="Hannah working with Luna beside her"
              width={840}
              height={960}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Why This Site Exists</h2>
          </div>
          <div className="card">
            <p className="muted">
              For a long time, I was working and getting by, but I was not building anything that felt like mine. I
              kept telling myself I would start when I felt ready. I never felt ready.
            </p>
            <p className="muted">
              I helped build other people&apos;s dreams. I paid the bills. I survived. But deep down, I knew I wanted
              more.
            </p>
            <p className="muted">
              This site is where I stop waiting. It is where I learn, build, make mistakes, and try again. Not
              perfectly. Not all at once. Just consistently.
            </p>
            <p className="muted">
              If you feel like you are behind or starting over, I hope this space reminds you that it is not too late.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How I Can Help</h2>
            <Link className="text-link" href="/work-with-me">
              See all packages
            </Link>
          </div>
          <p className="muted">If you need practical website help, these are the ways I can support you right now.</p>

          <div className="card-grid offer-grid">
            <article className="card">
              <h3>Website Update Session</h3>
              <p className="muted">Quick fixes and cleanups for an existing site.</p>
              <p className="muted">Text, images, links, layout issues, and simple mobile improvements.</p>
            </article>
            <article className="card">
              <h3>Simple Landing Page</h3>
              <p className="muted">A clean one page site for one offer, service, or booking link.</p>
              <p className="muted">Clear messaging, mobile friendly, and easy to manage.</p>
            </article>
            <article className="card">
              <h3>Monthly Website Care</h3>
              <p className="muted">
                Ongoing support so your website stays updated without you worrying about it.
              </p>
              <p className="muted">Small updates, minor fixes, and consistent maintenance.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Rebuilding Together</h2>
            <Link className="text-link" href="/start-here">
              Follow the path
            </Link>
          </div>

          <div className="split">
            <article className="card">
              <h3>My Journey Right Now</h3>
              <p className="muted">
                I am rebuilding step by step. I share my progress, my projects, and what I am learning as I go.
                No pretending. Just real work.
              </p>
            </article>

            <article className="card">
              <h3>If You Are Rebuilding Too</h3>
              <ul className="checklist">
                <li>Read one honest entry this week</li>
                <li>Choose one small promise and keep it for seven days</li>
                <li>Use this site as proof you are not behind</li>
              </ul>
              <p>
                <Link className="text-link" href="/journal">
                  Read this week&apos;s entry
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Latest Journal Entries</h2>
            <Link className="text-link" href="/journal">
              See all
            </Link>
          </div>
          <p className="muted">New entries as I build, learn, and level up.</p>

          <div className="card-grid journal-grid">
            {recentPosts.map((post) => (
              <article key={post.slug} className="card card-link">
                <p className="meta">
                  {post.category} • {post.date}
                </p>
                <h3>
                  <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.subtitle ? <p className="muted">{post.subtitle}</p> : null}
                <p className="muted">{post.blurb}</p>
                <p>
                  <Link className="text-link" href={`/journal/${post.slug}`}>
                    Read full entry
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card reader-cta">
            <h2>Get New Posts by Email</h2>
            <p className="muted">
              No spam. Just rebuild updates, project progress, and what I learn each week.
            </p>
            <p>
              <a
                className="btn btn-primary"
                href="mailto:h.jlee1911@gmail.com?subject=Add%20me%20to%20Build%20with%20Hannah%20updates"
              >
                Join Updates
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
