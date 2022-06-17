import ProjectCard from "./ProjectCard";
import "../styles/workSection.css";
import waldo from "../assets/where-waldo.png";
import battleship from "../assets/battleship.png";
import cvApplication from "../assets/cv-application.png";
import weather from "../assets/weather.png";
import etch from "../assets/etch-a-sketch.png";
import ticTacToe from "../assets/tic_tac_toe.png";

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
          imagePath={waldo}
          projectName="Where's Waldo?"
        />
        <ProjectCard
          description="A one-player Battleship game. You can drag-and-drop your ships and fight with an smart bot."
          liveDemoLink="https://gefgu.github.io/battleship/"
          codeLink="https://github.com/gefgu/battleship"
          imagePath={battleship}
          projectName="Battleship"
        />
        <ProjectCard
          description="The CV Application app. It is an React app to build a resumé. In it I learned about props and state."
          liveDemoLink="https://gefgu.github.io/cv-application/"
          codeLink="https://github.com/gefgu/cv-application"
          imagePath={cvApplication}
          projectName="CV Application"
        />
        <ProjectCard
          description="It displays weather data about a location using the openweatherAPI with async and promises."
          liveDemoLink="https://gefgu.github.io/weather-app/"
          codeLink="https://github.com/gefgu/weather-app"
          imagePath={weather}
          projectName="Weather App"
        />
        <ProjectCard
          description="A grid-based drawing app made using plain JavaScript. Built following the guidelines from The Odin Project."
          liveDemoLink="https://gefgu.github.io/odin-Etch-a-Sketch/"
          codeLink="https://github.com/gefgu/odin-Etch-a-Sketch"
          imagePath={etch}
          projectName="Etch-A-Sketch"
        />
        <ProjectCard
          description="A tic-tac-toe game built using plain javascript with an AI based on the min-max algorithm. It was made following The Odin Project's guidelines."
          liveDemoLink="https://gefgu.github.io/odin-tic-tac-toe/"
          codeLink="https://github.com/gefgu/odin-tic-tac-toe"
          imagePath={ticTacToe}
          projectName="Tic Tac Toe"
        />
      </section>
    </section>
  );
};

export default WorkSection;

// Fix Image
