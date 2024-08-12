import "./Contact.scss";
import Github from "../../assets/logos/github.svg";
import Linkedin from "../../assets/logos/linkedin.svg";
import Email from "../../assets/logos/e-mail.svg";
import Instagram from "../../assets/logos/instagram.svg";

function Contact() {
  const snowflakes = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className="snowflake"
      style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 10}s` }}
    />
  ));

  return (
    <div className="contact">
      <div className="contact__info">
        <h2 className="contact__header">Let's <span className="contact__header--highlight">connect</span></h2>
        <ul className="contact__links">
          <li className="contact__item">
            <a className="contact__link" href="mailto:dev@sagecodes.tech">
              <img className="contact__icons" src={Email} alt="email" />
              Email
            </a>
          </li>
          <li className="contact__item">
            <a
              className="contact__link"
              href="https://github.com/SageJonathan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="contact__icons" src={Github} alt="GitHub" />
              GitHub
            </a>
          </li>
          <li className="contact__item">
            <a
              className="contact__link"
              href="https://www.linkedin.com/in/sagejonathan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact__icons contact__icons--linkedin"
                src={Linkedin}
                alt="LinkedIn"
              />
              LinkedIn
            </a>
          </li>
          <li className="contact__item">
            <a
              className="contact__link"
              href="https://www.instagram.com/wandering_mapachito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="contact__icons" src={Instagram} alt="Instagram" />
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="mountain-range">
        {snowflakes}
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3">
        <div className="flag"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
