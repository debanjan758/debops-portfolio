function ProjectCard({ title, description, tech, category, github, live }) {
  return (
    <div className="project-card">
      <div className="project-buttons">
        <a href={github} target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
        <a href={live} target="_blank" rel="noreferrer">
          <button>Live Demo</button>
        </a>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Tech:</strong> {tech}
      </p>
    </div>
  );
}

export default ProjectCard;
