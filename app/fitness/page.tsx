export const metadata = {
  title: "Fitness | Build with Hannah",
  description: "Tracking my fitness rebuild — strength, discipline, and healing.",
};

export default function FitnessPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Fitness</h1>
        <p className="muted">Rebuilding strength. Rebuilding discipline.</p>

        <div className="card-grid">
          <article className="card">
            <h3>Current Focus</h3>
            <p className="muted">Strength • Core • Mobility</p>
            <p>Consistency first. Supporting my back. Building a routine I can actually keep.</p>
          </article>

          <article className="card">
            <h3>Food and Discipline</h3>
            <p className="muted">Protein • Habits • Structure</p>
            <p>Rebuilding my relationship with food without extremes.</p>
          </article>

          <article className="card">
            <h3>Weekly Check Ins</h3>
            <p className="muted">Wins • Lessons • Adjustments</p>
            <p>Short weekly logs to track what’s working.</p>
          </article>
        </div>
      </div>
    </section>
  );
}