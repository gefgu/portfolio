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
          imagePath="./portfolio/where-waldo.png"
          projectName="Where's Waldo?"
        />
        <ProjectCard
          description="A one-player Battleship game. You can drag-and-drop your ships and fight with an smart bot."
          liveDemoLink="https://gefgu.github.io/battleship/"
          codeLink="https://github.com/gefgu/battleship"
          imagePath="./portfolio/battleship.png"
          projectName="Battleship"
        />
        <ProjectCard
          description="The CV Application app. It is an React app to build a resumé. In it I learned about props and state."
          liveDemoLink="https://gefgu.github.io/cv-application/"
          codeLink="https://github.com/gefgu/cv-application"
          imagePath="./portfolio/cv-application.png"
          projectName="CV Application"
        />
        <ProjectCard
          description="It displays weather data about a location using the openweatherAPI with async and promises."
          liveDemoLink="https://gefgu.github.io/weather-app/"
          codeLink="https://github.com/gefgu/weather-app"
          imagePath="./portfolio/weather.png"
          projectName="Weather App"
        />
        <ProjectCard
          description="A grid-based drawing app made using plain JavaScript. Built following the guidelines from The Odin Project."
          liveDemoLink="https://gefgu.github.io/odin-Etch-a-Sketch/"
          codeLink="https://github.com/gefgu/odin-Etch-a-Sketch"
          imagePath="./portfolio/etch-a-sketch.png"
          projectName="Etch-A-Sketch"
        />
        <ProjectCard
          description="A tic-tac-toe game built using plain javascript with an AI based on the min-max algorithm. It was made following The Odin Project's guidelines."
          liveDemoLink="https://gefgu.github.io/odin-tic-tac-toe/"
          codeLink="https://github.com/gefgu/odin-tic-tac-toe"
          imagePath="./portfolio/tic_tac_toe.png"
          projectName="Tic Tac Toe"
        />
      </section>
    </section>
  );
};

export default WorkSection;

// Fix Image
