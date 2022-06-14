import "../styles/projectCard.css";

const ProjectCard = ({ description, liveDemoLink, codeLink, imagePath }) => {
  return (
    <article className="project-card">
      <img src={imagePath} alt="placeholder" />
      <section className="project-description">
        <div className="project-heading">
          <h4>Project Name</h4>
          <div className="icons">
            <a href={codeLink}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github"
              />
            </a>
            <a href={liveDemoLink}>
              <img src={require("../icons/open-in-new.png")} alt="live demo" />
            </a>
          </div>
        </div>
        <p>{description}</p>
      </section>
    </article>
  );
};

export default ProjectCard;
