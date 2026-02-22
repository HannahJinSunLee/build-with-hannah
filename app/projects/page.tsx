export const metadata = {
  title: "Projects | Build with Hannah",
  description: "Frontend projects documenting my rebuild into tech.",
};

type Project = {
  name: string;
  stack: string;
  description: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: "Build with Hannah",
    stack: "HTML • CSS • JavaScript • Next.js",
    description: "My rebuild site. Built from scratch and improved as I learn.",
    links: [
      { label: "GitHub", href: "https://github.com/HannahJinSunLee" },
      // Add a live link later
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Projects</h1>
        <p className="muted">What I’ve built so far.</p>

        <div className="card-grid">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <h3>{p.name}</h3>
              <p className="muted">{p.stack}</p>
              <p>{p.description}</p>

              {p.links?.length ? (
                <p>
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="text-link">
                      {l.label}
                    </a>
                  ))}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}