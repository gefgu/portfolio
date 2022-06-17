import "../styles/aboutSection.css";
import gustavo from "../assets/gustavo.jpg"

const AboutSection = () => {
  return (
    <article className="about">
      <div className="blue-background"></div>
      <div className="white-triangle"></div>
      <div className="profile">
        <div className="floor-overlay">
          <img src={gustavo} alt="placeholder" />
        </div>
        <h1>Gustavo Santos</h1>
      </div>
      <section className="description">
        <h2>About Me</h2>
        <p>
          Hi! I'm Gustavo. A front-end developer focused on learning more about
          web development and best practices. I'm currently going through The
          Odin Project and expect to build amazing projects in the future.{" "}
        </p>
        <div className="icons">
          <a href="https://github.com/gefgu">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="github"
            />
          </a>

          <a href="https://www.linkedin.com/in/gustavobruno-developer/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              alt="linkedin"
            />
          </a>

          <a href="https://twitter.com/codewithgustavo">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              alt="twitter"
            />
          </a>
        </div>
      </section>
    </article>
  );
};

export default AboutSection;
