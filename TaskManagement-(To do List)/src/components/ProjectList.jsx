export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      <h3>Projects</h3>
      {projects.map(p => (
        <div key={p.id} className="project-card">
          {p.name}
        </div>
      ))}
    </div>
  );
}
