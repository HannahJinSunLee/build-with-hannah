import Link from "next/link";

export const metadata = {
  title: "Start Here | Build with Hannah",
  description: "If you are new here, start with these pages and posts.",
};

export default function StartHerePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h1>Start Here</h1>
          <p className="muted">Choose your path.</p>
        </div>

        <div className="card-grid start-grid">
          <article className="card">
            <h3>1) Need website help?</h3>
            <p className="muted">See beginner-safe packages and request a free checkup.</p>
            <p>
              <Link className="text-link" href="/work-with-me">
                Go to Work With Me
              </Link>
            </p>
          </article>

          <article className="card">
            <h3>2) Read the rebuild story</h3>
            <p className="muted">Start with the origin post, then continue the journal.</p>
            <p>
              <Link className="text-link" href="/journal/this-is-where-i-rebuild">
                Read the first post
              </Link>
            </p>
          </article>

          <article className="card">
            <h3>3) See proof of work</h3>
            <p className="muted">Look at active projects and progress updates.</p>
            <p>
              <Link className="text-link" href="/projects">
                View Projects
              </Link>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
