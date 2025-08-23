import { useEffect } from "react";
import { Link } from "react-scroll";
import { handleScroll } from "../../utils/handleScroll";
import "./Nav.scss";

function Nav() {
  useEffect(() => {
    handleScroll("navbar");
  }, []);
  return (
    <>
      <div className="nav" id="navbar">
        <div className="nav__img-container">
          <Link to="hero" smooth={true} duration={500}>
            <img className="nav__logo" src="/transparentlogo.png" alt="LOGO" />
          </Link>
        </div>
        <ul className="nav__link-container">
          <li className="nav__link nav__link--scroll nav__link--home">
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
            <span className="nav__link-dash">|</span>
          </li>
          <li className="nav__link">
            <Link to="clients" smooth={true} duration={500}>
              Clients
            </Link>
            <span className="nav__link-dash">|</span>
          </li>
          <li className="nav__link">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
            <span className="nav__link-dash">|</span>
          </li>
          <li className="nav__link nav__link--contact">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
