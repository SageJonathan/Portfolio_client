import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
import sagecodes from "../../assets/logos/hummingbird.ico";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav__img-container" onClick={() => navigate("/")}>
        <img className="nav__img" src={sagecodes} alt="LOGO" />
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
      </ul>
    </div>
  );
}

export default Nav;
