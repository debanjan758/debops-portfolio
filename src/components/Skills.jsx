function Skills() {
    return (
        <section
        id="skills"
        style={{
          minHeight: "100vh",
          padding: "50px",
          textAlign: "center",
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
    );
}

export default Skills;