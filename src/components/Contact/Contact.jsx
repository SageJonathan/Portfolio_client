import "./Contact.scss";
import Author2 from "../../assets/images/author2.jpg";
import Github from "../../assets/logos/github.svg";
import Linkedin from "../../assets/logos/linkedin.svg";
import Email from "../../assets/images/e-mail.svg";
import Instagram from "../../assets/logos/instagram.svg"

function Contact() {
  return (
    <div className="contact">
      <img className="contact__profile" src={Author2} alt="Author" />
      <div className="contact__info">
        <h2 className="contact__header">Let's connect</h2>
        <ul className="contact__links">
          <li className="contact__link">
            {" "}
            <a className="contact__link" href="mailto:dev@sagecodes.tech">
              <img className="contact__icons" src={Email} alt="email" />
              Email
            </a>
          </li>
          <li>
            {" "}
            <a
              className="contact__link"
              href="https://github.com/SageJonathan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact__icons"
                src={Github}
                alt="GitHub"
              />
              GitHub
            </a>
          </li>
          <li>
            {" "}
            <a
              className="contact__link"
              href="https://www.linkedin.com/in/sagejonathan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact__icons"
                src={Linkedin}
                alt="LinkedIn"
              />
              Linkedin
            </a>
          </li>
          <li>
            {" "}
            <a
              className="contact__link"
              href="https://www.instagram.com/wandering_mapachito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact__icons"
                src={Instagram}
                alt="Instagram"
              />
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
