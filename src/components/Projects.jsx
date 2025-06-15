import "/public/Projects.css";
import projectsData from "/projects.json";

export default function Projects() {
  const projects = projectsData.map((project, index) => {
    return (
      <div className="project-card" key={index}>
        <img
          src={project.image}
          alt="memory game load screen"
          className="memory-game-image"
        />
        <section className="project-details">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <span className="technologies">
            {project.technologies.map((tech, index) => {
              return (
                <span className="technology" key={index}>
                  {tech}
                </span>
              );
            })}
          </span>
          <div className="project-links">
            <button className="github-link">
              <a href={project.githubLink} target="_blank">
                Code
              </a>
            </button>
            <button className="github-link">
              <a href={project.liveLink} target="_blank">
                Demo
              </a>
            </button>
          </div>
        </section>
      </div>
    );
  });

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="projects-content">{projects}</div>
    </section>
  );
}
