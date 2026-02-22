export const metadata = {
  title: "Home Lab | Build with Hannah",
  description: "Documenting my home lab experiments and Linux learning.",
};

export default function HomeLabPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Home Lab</h1>
        <p className="muted">Learning by building my own infrastructure.</p>

        <div className="card-grid">
          <article className="card">
            <h3>Old PC → Server</h3>
            <p className="muted">Linux • Networking • Self hosting</p>
            <p>Turning an unused computer into a working home server.</p>
          </article>

          <article className="card">
            <h3>Linux Basics</h3>
            <p className="muted">CLI • Files • Permissions</p>
            <p>Daily notes as I learn the terminal and system basics.</p>
          </article>

          <article className="card">
            <h3>Future Experiments</h3>
            <p className="muted">Docker • Services • Monitoring</p>
            <p>What I want to try next as I level up.</p>
          </article>
        </div>
      </div>
    </section>
  );
}