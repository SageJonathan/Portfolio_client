import "./Contact.scss";
import Author2 from "../../assets/images/author2.jpg";
import Github from "../../assets/logos/github.svg"
import Linkedin from "../../assets/logos/linkedin.svg"
import Email from "../../assets/images/e-mail.svg"

function Contact() {
  return (
    <div className="contact">
      <img className="contact__profile" src={Author2} alt="Author" />
      <div className="contact__info">
        <h2 className="contact__header">Let's connect</h2>
        <ul className="contact__links">
          <li> <img className="footer__contact-img" src={Email} alt="email" />Email</li>
          <li> <img className="footer__social-icon" src={Linkedin} alt="LinkedIn" /> Linkedin</li>
          <li> <img className="footer__social-icon footer__social-icon--github" src={Github} alt="GitHub" /> GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
