import "../styles/projectCard.css";

const ProjectCard = () => {
  return (
    <article className="project-card">
      <img src="https://picsum.photos/600" alt="placeholder" />
      <section className="project-description">
        <h4>Project Name</h4>
        <p>
          Short description of the project. Just a couple sentences will do.
        </p>
      </section>
    </article>
  );
};

export default ProjectCard;
