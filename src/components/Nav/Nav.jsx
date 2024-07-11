import "./Nav.scss";
import sagecodes from "../../assets/logos/sagecodes.svg"

function Nav() {
  return (
  
    <div className="nav">
      <div className="nav__img-container">
        <img className="nav__img" src={sagecodes} alt="LOGO" />
      </div>
      <ul className="nav__link-container">
        <li className="nav__link">About <span className="nav__link-dash">|</span></li>
        <li className="nav__link">Projects <span className="nav__link-dash">|</span></li>
        <li className="nav__link nav__link--contact">Contact <span className="nav__link-dash">|</span></li>
      </ul>
    </div>
  );
}

export default Nav;
