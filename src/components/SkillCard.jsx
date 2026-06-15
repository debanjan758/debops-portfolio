function SkillCard({ title, technologies }) {
    return (
        <div className="skill-card">
            <h3>{title}</h3>
            <p>{technologies}</p>
        </div>
    );
}

export default SkillCard;