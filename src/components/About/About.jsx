
import './About.scss';
import Author2 from '../../assets/images/author.png';
import { useViewObserver } from '../../utils/viewObserver';

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
          className={`about__header ${isVisible ? 'animate' : ''}`}
        >
          About Me
        </h2>
        <p className="about__text">
          Hi, I’m Jonathan Sage—a web developer with a passion for alpinism and
          a knack for delivering exceptional results. My journey from leading
          operations at world-class equestrian events to climbing some of the
          world’s most challenging peaks has honed my skills in problem-solving,
          leadership, and adaptability.
        </p>
        <p className="about__text">
          In development, I leverage this diverse experience to create
          impactful, user-focused solutions. My background in managing complex
          projects and navigating remote, multicultural environments equips me
          to tackle any project with precision and creativity.
        </p>
      </div>
    </div>
  );
};

export default About;
