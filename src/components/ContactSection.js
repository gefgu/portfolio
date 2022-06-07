import "../styles/contactSection.css";

const ContactSection = () => {
  return (
    <section className="contact">
      <section className="information">
        <h2>Contact me</h2>
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <address>
          1234 Random Road <br /> Random Town, California 12345
        </address>
        <section className="contact-info">
          <address>555-555-5555</address>
          <address>asheleywilliams.is.not.real@gmail.com</address>
        </section>
      </section>
      <picture>
        <img src="https://picsum.photos/900/500" alt="placeholder" />
      </picture>
    </section>
  );
};

export default ContactSection;
