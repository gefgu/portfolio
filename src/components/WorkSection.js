import ProjectCard from "./ProjectCard";
import "../styles/workSection.css";

const WorkSection = () => {
  return (
    <section className="work">
      <h2>My work</h2>
      <section className="projects">
        <h3 className="hidden">Projects</h3>
        <ProjectCard
          description="A Where's Waldo Game using Firebase to keep scores and React for a nice Front-End experience"
          liveDemoLink="https://where-is-waldo-16811.web.app/"
          codeLink="https://github.com/gefgu/where-is-waldo"
          imagePath="./where-waldo.png"
        />
      </section>
    </section>
  );
};

export default WorkSection;

// Fix Image