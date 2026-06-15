function ProjectCard({ title, description, tech}) {
    return (
        <div className="project-card">
            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
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