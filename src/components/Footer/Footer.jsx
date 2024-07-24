import "./Footer.scss";
import Github from "../../assets/logos/github.svg";
import Linkedin from "../../assets/logos/linkedin.svg";
import Email from "../../assets/logos/e-mail.svg";
import Instagram from "../../assets/logos/instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <h4 className="footer__header footer__header--contact">
          Let's work together
        </h4>
        <div className="footer__contact-wrapper">
          <a className="footer__link" href="mailto:dev@sagecodes.tech">
            <img className="footer__contact-img" src={Email} alt="email" />
            <p className="footer__email">Write to me</p>
          </a>
        </div>
        <div className="footer__contact-wrapper">
          <a
            className="footer__link"
            href="https://github.com/SageJonathan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__social-icon"
              src={Github}
              alt="GitHub"
            />
            <p className="footer__social-text">
              GitHub
            </p>
          </a>
        </div>
        
      </div>
      <div className="footer__middle">
        <p className="footer__rights"> &copy; Sage Codes</p>
      </div>
      <div className="footer__right">
        <h4 className="footer__header footer__header--social">Socials</h4>
        <div className="footer__social-wrapper">
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/sagejonathan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__social-icon footer__social-icon--linkedin"
              src={Linkedin}
              alt="LinkedIn"
            />
            <p className="footer__social">LinkedIn</p>
          </a>
        </div>
        <div className="footer__social-wrapper">
          <a
            className="footer__link"
            href="https://www.instagram.com/wandering_mapachito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__social-icon footer__social-icon--instagram"
              src={Instagram}
              alt="Instagram"
            />
            <p className="footer__social">Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
