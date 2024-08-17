import './Contact.scss';
import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';
import Email from '../../assets/icons/email.png';
import Instagram from '../../assets/icons/instagram.png';
import { useViewObserver } from '../../utils/viewObserver';

function Snowflake({ index }) {
  return (
    <div
      className="snowflake"
      style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 10}s` }}
      key={index}
    />
  );
}

function Mountain({ className, delay }) {
  return (
    <div className={`mountain ${className}`} style={{ animationDelay: `${delay}s` }}>
      {className === 'mountain-3' && <div className="flag"></div>}
    </div>
  );
}

function Contact() {
  const [headerRef, isVisible] = useViewObserver(0.1);
  
  return (
    <div className={`contact ${isVisible ? 'animate' : ''}`}>
      <div className="contact__info">
        <h2 className="contact__header">
          Let's <span ref={headerRef} className={`contact__header--highlight`}>connect</span>
        </h2>
        <ul className="contact__links">
          <li className="contact__item">
            <a className="contact__link" href="mailto:dev@sagecodes.tech">
              <img className="contact__icons contact__icons--email" src={Email} alt="email" />
              Email
            </a>
          </li>
          <li className="contact__item">
            <a className="contact__link" href="https://github.com/SageJonathan" target="_blank" rel="noopener noreferrer">
              <img className="contact__icons" src={Github} alt="GitHub" />
              GitHub
            </a>
          </li>
          <li className="contact__item">
            <a className="contact__link" href="https://www.linkedin.com/in/sagejonathan/" target="_blank" rel="noopener noreferrer">
              <img className="contact__icons contact__icons--linkedin" src={Linkedin} alt="LinkedIn" />
             LinkedIn
            </a>
          </li>
          <li className="contact__item">
            <a className="contact__link" href="https://www.instagram.com/wandering_mapachito/" target="_blank" rel="noopener noreferrer">
              <img className="contact__icons contact__icons--instagram" src={Instagram} alt="Instagram" />
             Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="mountain-range">
        {[...Array(10)].map((_, index) => (
          <Snowflake key={index} index={index} />
        ))}
        <Mountain className="mountain-1" delay={0} />
        <Mountain className="mountain-2" delay={0.5} />
        <Mountain className="mountain-3" delay={1} />
      </div>
    </div>
  );
}

export default Contact;

