import "./About.scss";
import Author2 from "../../assets/images/author.png";
import { useViewObserver } from "../../utils/viewObserver";

const About = () => {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <div className="about">
      <div className="about__img-container">
        <img className="about__img" src={Author2} alt="Author" />
      </div>
      <div className="about__description">
        <h2
          ref={headerRef}
          className={`about__header ${isVisible ? "animate" : ""}`}
        >
          About Me
        </h2>
        <p className="about__text">
          I’m Jonathan Sage, a full-stack developer and prompt engineer. I work
          with a diverse range of clients to build custom websites, including
          e-commerce solutions, and specialize in optimizing and maintaining
          existing platforms. My focus is on creating modern, scalable solutions
          that meet the unique needs of each project.
        </p>
        <p className="about__text">
          With a background in managing complex projects and solving technical
          challenges, I deliver clean, efficient code that drives growth and
          innovation. Whether building from the ground up or enhancing existing
          platforms, I’m dedicated to providing impactful, user-focused
          solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
