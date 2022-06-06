import "../styles/projectCard.css";

const ProjectCard = () => {
  return (
    <article className="project-card">
      <img src="https://picsum.photos/600" alt="placeholder" />
      <section className="project-description">
        <div className="project-heading">
          <h4>Project Name</h4>
          <div className="icons">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="github"
            />
            <img src={require("../icons/open-in-new.png")} alt="live demo" />
          </div>
        </div>
        <p>
          Short description of the project. Just a couple sentences will do.
        </p>
      </section>
    </article>
  );
};

export default ProjectCard;
