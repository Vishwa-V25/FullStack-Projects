import { useState } from "react";

export default function Navbar({
  projects,
  activeProjectId,
  onSelect,
  onAdd
}) {
  const [projectName, setProjectName] = useState("");

  const handleCreate = () => {
    if (!projectName.trim()) return;
    onAdd(projectName.trim());
    setProjectName("");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <h2 className="logo">WorkFlowX</h2>

      {/* Create Project */}
      <div className="project-input">
        <input
          type="text"
          placeholder="New project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCreate();
          }}
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      {/* Project List */}
      <div className="project-list">
        {projects.length === 0 && (
          <div className="project-empty">
            No projects yet
          </div>
        )}

        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              project.id === activeProjectId ? "active" : ""
            }`}
            onClick={() => onSelect(project.id)}
          >
            <div className="project-name">
              {project.name}
            </div>
            <div className="project-meta">
              Created
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

