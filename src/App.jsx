import "./index.css";

function App() {
  return (
    <>
    <nav>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
    </nav>

    <div className="hero">
      <h1>Hi, I'm Debanjan Sen 👋</h1>

      <h2>B.Tech CSE Student | DevOps Enthusiast | Exploring Cloud, CI/CD, and Automation.</h2>

      <div className="Social-links">
        <a href="https://github.com/debanjan758" target="_blank">
          GitHub        
        </a>

        <a href="https://linkedin.com/in/debanjansen758" target="_blank">
          LinkedIn
        </a>

        <a href="mailto:deanjansen32@gmail.com" target="_blank">
          Email
        </a>
      </div>

      <p>
        Passionate about DevOps, cloud technologies, and building production-ready systems.
      </p>

    {/* Hero Section */}

      <div className="hero-buttons">
        <a href="#about">
          <button>About Me</button>
        </a>

        <a href="#skills">
          <button>Skills</button>
        </a>

        <a href="#projects">
          <button>View Projects</button>
        </a>
        
        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </div>

    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center"
      }}
      >
        <h2>About Me</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}        
        >
          I'm a B.Tech CSE student with a strong interest in DevOps and cloud computing. I enjoy solving real-world problems through technology and continuously challenge myself by building production-ready projects while learning modern development practices.

        </p>
      </section>

      <section
        id="skills"
        style={{
          minHeight: "100vh",
          padding: "50px",
          textAlign: "center"
        }}
      >
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>DevOps</h3>
            <p>Docker • Kubernetes • GitHub Actions • Linux • Jenkins</p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python • JavaScript • Bash</p>
          </div>

          <div className="skill-card">
            <h3>Cloud</h3>
            <p>AWS • Nginx</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React • HTML • CSS</p>
          </div>
        </div>
      </section>

    {/* Temporary Projects Section */}
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center"
      }}
    >
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <div className="project-buttons">
            <button>GitHub</button>
            <button>Live Demo</button>
          </div>

          <h3>DevOps Portfolio website</h3>

          <p>
            A professional website documenting my journey into DevOps and software engineering.
          </p>
          <p><strong>Tech:</strong> React, Vite, Git, GitHub</p>
      </div>

        <div className="project-card">
          <div className="project-buttons">
            <button>GitHub</button>
            <button>Live Demo</button>
          </div>

          <h3>Expense Tracker</h3>

          <p>
            Web application to track income and expenses with budget alerts and
            visual insights.
          </p>
          <p><strong>Tech:</strong> React, JavaScript, Charts</p>
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
          <p><strong>Tech:</strong> Docker, GitHub Actions, AWS</p>
        </div>
      </div>
    </section>

    <footer>
      <p>
        © 2026 Debanjan Sen.
        Built with React and passion for DevOps.
      </p>
    </footer>

    </>
  );
}

export default App;