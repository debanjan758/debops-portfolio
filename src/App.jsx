import "./index.css";

function App() {
  return (
    <>
    <div className="hero">
      <h1>Hi, I'm Debanjan Sen 👋</h1>

      <h2>B.Tech CSE Student | DevOps Enthusiast | Exploring Cloud, CI/CD, and Automation.</h2>

      <h3>Github . Linkedin . Email</h3>

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

        <div className="skill-container">
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
            <p>AWS • Ngnix</p>
          </div>

          <div className="skill-card">
            <h3>frontend</h3>
            <p>React • HTML • CSS</p>
          </div>
        </div>
      </section>

    {/* Temporary Projects Section */}
    <div
      id="projects"
      style={{
        height: "100vh",
        padding: "50px",
      }}
    >
      <h2>Projects Section</h2>
      <p>Your future projects will appear here.</p>
    </div>
    </>
  );
}

export default App;