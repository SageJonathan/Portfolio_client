import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <h4 className="footer__header footer__header--contact">Let's work</h4>
        <div className="test">
          <div className="footer__contact-wrapper">
            <a className="footer__link" href="mailto:dev@sagecodes.tech">
              <p className="footer__contact--text">Email</p>
            </a>
          </div>
          <div className="footer__contact-wrapper">
            <a
              className="footer__link"
              href="https://github.com/SageJonathan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer__social-text">GitHub</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__middle">
        <p className="footer__copyright"> &copy; Sage Codes</p>
      </div>
      <div className="footer__right">
        <h4 className="footer__header footer__header--social"> Let's chat</h4>
        <div className="test">
          <div className="footer__social-wrapper">
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/sagejonathan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer__social-text">LinkedIn</p>
            </a>
          </div>
          <div className="footer__social-wrapper">
            <a
              className="footer__link"
              href="https://www.instagram.com/wandering_mapachito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer__social-text footer__social-text--instagram">
                Instagram
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
