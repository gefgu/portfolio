import "../styles/aboutSection.css";

const AboutSection = () => {
  return (
    <article className="about">
      <div className="profile">
        <img src="https://picsum.photos/400" alt="placeholder" />
        <h1>Ashely Williams</h1>
      </div>
      <section className="description">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et quam
          sed ipsum hendrerit dapibus. Phasellus imperdiet feugiat quam sed
          elementum. Aliquam erat volutpat. Suspendisse pulvinar, felis luctus
          interdum vulputate, magna urna pulvinar erat, accumsan venenatis urna
          nisl eget justo.{" "}
        </p>
      </section>
    </article>
  );
};

export default AboutSection;
