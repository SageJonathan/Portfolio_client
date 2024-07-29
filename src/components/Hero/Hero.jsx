import "./Hero.scss";
import Author3 from "../../assets/images/author3.jpg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div class="person">
          <div class="person__box">
            <div class="person__title">
              <span class="person__block"></span>
              <h1>
                Jonathan Sage<span></span>
              </h1>
            </div>
            <div class="person__role">
              <div class="person__block"></div>
              <p>Fullstack Developer</p>
            </div>
            <div className="person__img-container">
              <img className="person__img" src={Author3} alt="" />
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
