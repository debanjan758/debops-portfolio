import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "DevOps Portfolio Website",
      description:
        "A professional website documenting my journey into DevOps and software engineering.",
      tech: "React, Vite, Git, GitHub",
    },

    {
      title: "Expense Tracker",
      description:
        "Web application to track income and expenses with budget alerts and visual insights.",
      tech: "React, JavaScript, Charts",
    },

    {
      title: "Upcoming DevOps Project",
      description:
        "A production-grade project showcasing Docker, CI/CD, AWS, and monitoring.",
      tech: "Docker, GitHub Actions, AWS",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;