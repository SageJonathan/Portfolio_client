import "./Footer.scss"
import Github from "../../assets/logos/github.svg"
import Linkedin from "../../assets/logos/linkedin.svg"
function Footer() {

    return (
     <div className="footer">
      <div className="footer__left">
         <h4 className="footer__header">Contact</h4>
         <p className="footer__email">Write to me</p>
      </div>
      <div className="footer__middle">
      <p className="footer__rights"> &copy; Sage Codes</p>
      </div>
      <div className="footer__right">
      <h4 className="footer__header footer__header--social">Socials</h4>
      <div className="footer__social-wrapper">
          <img className="footer__social-icon" src={Linkedin} alt="LinkedIn" />
          <p className="footer__social">Linkedin</p>
        </div>
        <div className="footer__social-wrapper">
          <img className="footer__social-icon footer__social-icon--github" src={Github} alt="GitHub" />
          <p className="footer__social-text footer__social-text--github">GitHub</p>
      </div>
     </div>
     </div>
    )
  }
  
  export default Footer
  