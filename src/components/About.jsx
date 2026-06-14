function About() {
    return (
        <section
        id="about"
        style={{
          minHeight: "100vh",
          padding: "50px",
          textAlign: "center",
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
          I'm a B.Tech CSE student with a strong interest in DevOps and cloud
          computing. I enjoy solving real-world problems through technology and
          continuously challenge myself by building production-ready projects
          while learning modern development practices.
        </p>
      </section>
    );
}

export default About;