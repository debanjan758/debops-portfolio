import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    {
      title: "DevOps",
      technologies: "Docker • Kubernetes • GitHub Actions • Linux • Jenkins",
    },
    {
      title: "Programming",
      technologies: "Python • JavaScript • Bash",
    },
    {
      title: "Cloud",
      technologies: "AWS • Nginx",
    },
    {
      title: "Frontend",
      technologies: "React • HTML • CSS",
    },
  ];

    return (
        <section id="skills">
        <h2>Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              technologies={skill.technologies}
            />
          ))}
        </div>
      </section>
    );
}

export default Skills;