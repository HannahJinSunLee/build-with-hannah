import Link from "next/link";

export const metadata = {
  title: "Reader Hub | Build with Hannah",
  description: "Ways to stay connected to new posts and project updates.",
};

export default function SupportPage() {
  return (
    <section className="section">
      <div className="container content-narrow">
        <h1>Reader Hub</h1>
        <p className="muted">
          Thanks for being here. I publish progress notes, project updates, and
          honest rebuild lessons.
        </p>

        <div className="card support-card">
          <h3>Want updates?</h3>
          <p>
            Send me an email and I will add you to my early reader list.
          </p>
          <p>
            <a className="btn btn-primary" href="mailto:hannah@example.com?subject=Add%20me%20to%20Build%20with%20Hannah%20updates">
              Join Updates by Email
            </a>
          </p>
        </div>

        <p>
          <Link className="text-link" href="/start-here">
            New here? Start here.
          </Link>
        </p>
      </div>
    </section>
  );
}
