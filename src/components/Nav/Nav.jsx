import "./Nav.scss";
import sagecodes from "../../assets/logos/sagecodes.png"

function Nav() {
  return (
    <div className="nav">
      <div className="nav__img-container">
        <img className="nav__img" src={sagecodes} alt="LOGO" />
      </div>
      <ul className="nav__link-container">
        <li className="nav__link">About</li>
        <li className="nav__link">Projects</li>
        <li className="nav__link nav__link--contact">Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
