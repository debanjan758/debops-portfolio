function Hero() {
  return (
    <div className="hero">
      <h1>Hi, I'm Debanjan Sen 👋</h1>

      <h2>
        B.Tech CSE Student | DevOps Enthusiast |
        Exploring Cloud, CI/CD, and Automation.
      </h2>

      <div className="social-links">
        <a
          href="https://github.com/debanjan758"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/debanjansen758"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:debanjansen32@gmail.com">
          Email
        </a>
      </div>

      <p>
        Passionate about DevOps, cloud technologies,
        and building production-ready systems.
      </p>

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
  );
}

export default Hero;