import Link from "next/link";

export const metadata = {
  title: "Work With Me | Build with Hannah",
  description:
    "Beginner-friendly website support for small businesses: updates, fixes, and simple landing pages.",
};

const offers = [
  {
    title: "Website Update Session",
    price: "$75-$150",
    points: [
      "Text, image, and link updates",
      "Basic mobile layout cleanup",
      "Delivery in 2-3 days",
    ],
  },
  {
    title: "Simple Landing Page",
    price: "$150-$300",
    points: [
      "One-page layout for one offer",
      "Clear headline, CTA, and contact section",
      "Template-based, clean, and fast",
    ],
  },
  {
    title: "Monthly Website Care",
    price: "$90-$180/mo",
    points: [
      "2 small updates per month",
      "Fixes for broken links and simple issues",
      "Email support with 48-hour response",
    ],
  },
];

const steps = [
  {
    title: "Inquiry & Fit",
    detail: "You tell me the problem. I confirm it fits beginner-safe scope and share a quick plan.",
  },
  {
    title: "Checkup & Plan",
    detail: "I do a short website checkup and list 3 fixes. You approve the ones you want shipped.",
  },
  {
    title: "Delivery & Proof",
    detail: "I ship the changes, send before/after, and note what to do next. Clear and fast.",
  },
];

export default function WorkWithMePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h1>Work With Me</h1>
          <p className="muted">Simple support for small businesses and creators.</p>
        </div>

        <div className="card work-intro">
          <p className="muted">
            I am in my early 30s and early in my web development journey, so I
            focus on small, practical services I can deliver well. If your
            project needs advanced custom engineering, I will tell you upfront.
          </p>
          <p className="muted">
            Working with me means you get honest support for your website, and
            you also help me keep building toward my long-term tech goals.
          </p>
        </div>

        <div className="section-head">
          <h2>How We Work Together</h2>
        </div>
        <div className="step-grid">
          {steps.map((step) => (
            <article key={step.title} className="card step-card">
              <h3>{step.title}</h3>
              <p className="muted">{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="section-head">
          <h2>Services</h2>
          <p className="muted">Beginner-friendly web support you can book today.</p>
        </div>

        <div className="card-grid offer-grid">
          {offers.map((offer) => (
            <article key={offer.title} className="card offer-card">
              <h3>{offer.title}</h3>
              <p className="offer-price">{offer.price}</p>
              <ul className="offer-list">
                {offer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="why-human">
          <div className="section-head">
            <h2>Why Work With a Person in the AI Era?</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Context Over Generic Output</h3>
              <p className="muted">
                AI gives ideas. I shape those ideas around your real business,
                customers, and local context.
              </p>
            </article>
            <article className="card">
              <h3>Implementation, Not Just Advice</h3>
              <p className="muted">
                You do not need more prompts. You need changes shipped, tested,
                and cleaned up on your actual site.
              </p>
            </article>
            <article className="card">
              <h3>Accountability and Communication</h3>
              <p className="muted">
                You get a real person who responds, explains tradeoffs, and
                keeps the work moving.
              </p>
            </article>
          </div>
        </section>

        <div className="card reader-cta">
          <h2>Request a Free 15-Minute Website Checkup</h2>
          <p className="muted">
            I will review your homepage and send 3 quick fixes you can apply
            immediately.
          </p>
          <p>
            <a
              className="btn btn-primary"
              href="mailto:h.jlee1911@gmail.com?subject=Website%20audit%20request"
            >
              Send Audit Request
            </a>
          </p>
          <p>
            <Link className="text-link" href="/projects">
              See my projects first
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
