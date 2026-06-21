import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "DevOps Portfolio Website",
      description:
        "A professional website documenting my journey into DevOps and software engineering.",
      tech: "React, Vite, Git, GitHub",
      category: "DevOps",
      github: "https://github.com/debanjan758/debops-portfolio.git",
      live: "https://debanjan758.github.io/debops-portfolio/",
    },

    {
      title: "Expense Tracker",
      description:
        "Web application to track income and expenses with budget alerts and visual insights.",
      tech: "React, JavaScript, Charts",
      category: "Web",
      github: "#",
      live: "#",
    },

    {
      title: "Upcoming DevOps Project",
      description:
        "A production-grade project showcasing Docker, CI/CD, AWS, and monitoring.",
      tech: "Docker, GitHub Actions, AWS",
      category: "DevOps",
      github: "#",
      live: "#",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="filter-buttons">
        <button 
        className={filter === "All" ? "active-filter" : ""}
        onClick={() => setFilter("All")}
        >
          All
        </button>

        <button 
        className={filter === "Web" ? "active-filter" : ""}
        onClick={() => setFilter("Web")}
        >
          Web
        </button>

        <button 
        className={filter === "DevOps" ? "active-filter" : ""}
        onClick={() => setFilter("DevOps")}
        >
          DevOps
        </button>
        <button 
        className={filter === "AI" ? "active-filter" : ""}
        onClick={() => setFilter("AI")}
        >
          AI
        </button>
      </div>

      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              category={project.category}
              github={project.github}
              live={project.live}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
