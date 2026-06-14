function Projects() {
    return (
        <section
        id="projects"
        style={{
          minHeight: "100vh",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2>Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>

            <h3>DevOps Portfolio Website</h3>

            <p>
              A professional website documenting my journey into DevOps and
              software engineering.
            </p>

            <p>
              <strong>Tech:</strong> React, Vite, Git, GitHub
            </p>
          </div>

          <div className="project-card">
            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>

            <h3>Expense Tracker</h3>

            <p>
              Web application to track income and expenses with budget alerts
              and visual insights.
            </p>

            <p>
              <strong>Tech:</strong> React, JavaScript, Charts
            </p>
          </div>

          <div className="project-card">
            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>

            <h3>Upcoming DevOps Project</h3>

            <p>
              A production-grade project showcasing Docker, CI/CD, AWS, and
              monitoring.
            </p>

            <p>
              <strong>Tech:</strong> Docker, GitHub Actions, AWS
            </p>
          </div>
        </div>
      </section>
    );

}

export default Projects;