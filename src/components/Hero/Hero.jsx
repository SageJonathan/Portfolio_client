import "./Hero.scss";
import Author3 from "../../assets/images/author3.jpg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="person">
          <div className="person__container">
            <div className="person__text--upper">
              <span className="person__spread--gold"></span>
              <h1 className="person__name">
                Jonathan Sage<span className="person__dot"></span>
              </h1>
            </div>
            <div className="person__text--lower">
              <div className="person__spread--cyan"></div>
              <p className="person__role">Fullstack Developer</p>
            </div>
            <div className="person__img-container">
              <img className="person__img" src={Author3} alt="author" />
            </div>
          </div>
        </div>
        <div className="text">
          <h2 className="text__header">SAGE CODES</h2>
          <h3 className="text__subheader">Robust. Clean. Scalable.</h3>
        </div>
      </div>
    </>
  );
}

export default Hero;
