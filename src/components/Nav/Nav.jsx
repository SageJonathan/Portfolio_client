import React from "react";
import { Link } from "react-scroll";
import "./Nav.scss";
import sagecodes from "../../assets/logos/hummingbird.ico";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__img-container">
        <Link to="hero" smooth={true} duration={500}>
          <img className="nav__img" src={sagecodes} alt="LOGO" />
        </Link>
      </div>
      <ul className="nav__link-container">
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
          <a className="blog" 
          href="https://www.storiesfromthefringe.net/" 
          target="_blank"
            rel="noopener noreferrer">
            Writing
          <span className="nav__link-dash">|</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
