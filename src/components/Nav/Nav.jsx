import { useEffect } from "react";
import { Link } from "react-scroll";
import { handleScroll } from "../../utils/handleScroll";
import "./Nav.scss";

function Nav() {
  useEffect(() => {
    handleScroll('navbar');
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
        <li className="nav__link nav__link--scroll">
        <Link to="hero" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className="nav__link">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <span className="nav__link-dash">|</span>
        </li>
        <li className="nav__link">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <span className="nav__link-dash">|</span>
        </li>
        <li className="nav__link nav__link--contact">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          <span className="nav__link-dash">|</span>
        </li>
        <li className="nav__link nav__link--writing">
          <a className="nav__blog" 
          href="https://www.storiesfromthefringe.net/" 
          target="_blank" 
          rel="noopener noreferrer">
            Writing
          <span className="nav__link-dash">|</span>
          </a>
        </li>
      </ul>
    </div>
  </>
  );
}

export default Nav;
