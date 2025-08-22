import "./Footer.scss";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4 className="footer__title">Sage Codes</h4>
          <p className="footer__tagline">Robust. Clean. Scalable.</p>
          <p className="footer__description">
            Full-stack development consultancy delivering innovative digital
            solutions that drive business growth.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Services</h4>
          <ul className="footer__services">
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Custom Web Development
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="footer__link"
              >
                E-commerce Solutions
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Platform Optimization
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Technical Consulting
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Contact</h4>
          <div className="footer__contact">
            <p className="footer__contact-item">
              <strong>Email:</strong>{" "}
              <a href="mailto:dev@sagecodes.tech" className="footer__link">
                dev@sagecodes.tech
              </a>
            </p>
            <p className="footer__contact-item">
              <strong>Hours:</strong> Mon-Fri 9AM-5PM MST
            </p>
            <p className="footer__contact-item">
              <strong>Response:</strong> Within 24 hours
            </p>
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li>
              <Link
                to="clients"
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Our Clients
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="footer__link"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          <p>&copy; {currentYear} Sage Codes. All rights reserved.</p>
        </div>
        <div className="footer__canadian">
          <span className="footer__canadian-text">🇨🇦 Proudly Canadian</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
