import "../styles/contactSection.css";
import { BiPhone } from "react-icons/bi";
import { RiMailLine } from "react-icons/ri";

const ContactSection = () => {
  return (
    <section className="contact">
      <section className="information">
        <h2>Contact me</h2>
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <section className="contact-info">
          <address>
            <a href="mailto:gefgu12@gmail.com">
              <RiMailLine /> gefgu12@gmail.com
            </a>
          </address>
        </section>
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
      <picture>
        <img src="https://picsum.photos/900/500" alt="placeholder" />
      </picture>
    </section>
  );
};

export default ContactSection;
