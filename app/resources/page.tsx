export const metadata = {
  title: "Resources | Build with Hannah",
  description:
    "Tools and references I actually use while rebuilding in tech and life.",
};

const resources = [
  {
    name: "VS Code",
    note: "My daily coding editor. Lightweight and flexible.",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "Next.js Docs",
    note: "Primary reference when I get stuck while building.",
    href: "https://nextjs.org/docs",
  },
  {
    name: "MDN Web Docs",
    note: "Clear explanations for HTML, CSS, and JavaScript concepts.",
    href: "https://developer.mozilla.org/",
  },
];

export default function ResourcesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h1>Resources I Actually Use</h1>
          <p className="muted">Simple tools. Real consistency.</p>
        </div>

        <p className="muted disclosure">
          Some links may become affiliate links in the future. If they do, I will
          always mark them clearly.
        </p>

        <div className="card-grid">
          {resources.map((item) => (
            <article key={item.name} className="card">
              <h3>{item.name}</h3>
              <p className="muted">{item.note}</p>
              <p>
                <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
                  Visit resource
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
