import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  return (
    <section className="work">
      <h2>My work</h2>
      <section className="projects">
        <h3 className="hidden">Projects</h3>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </section>
  );
};

export default WorkSection;
