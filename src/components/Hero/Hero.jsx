import "./Hero.scss"
import Author from "../../assets/images/author.jpg"

function Hero () {

    return (
      <>
     <div className="hero">
       <div class="person">
           <div class="person__box">
              <div class="person__title">
                <span class="person__block"></span>
                <h1>Jonathan Sage<span></span></h1>
                {/* <h1>SAGE CODES<span></span></h1> */}
              </div>
              <div class="person__role">
              <div class="person__block"></div>
              <p>Fullstack Developer</p>
                {/* <p>Robust.Clean.Scalable</p> */}
              </div>
              <div className="person__img-container">
              <img className="person__img" src={Author} alt="" />
              </div>
            </div>
          </div>
          <div className="text">
              <h2 className="text__header">SAGE CODES</h2>
              <h3 className="text__subheader">Robust. Clean. Scalable.</h3>
              {/* <p className="text__text">As a Full Stack Engineer, I believe in robust, clean, and scalable code.</p>
              <p className="text__text">I prioritize modularity and thorough documentation as essential elements for creating complex, well-integrated codebases that deliver optimal performance for all stakeholders.</p>
              <p className="text__text"> My commitment is to ensure that every project I undertake is built with a foundation of quality and maintainability, fostering innovation and efficiency in every aspect of development.</p> */}
     </div>
     </div>
     {/* <div className="about">
         <p className="about__text">As a Full Stack Engineer, I believe in robust, clean, and scalable code.</p>
          <p className="about__text">I prioritize modularity and thorough documentation as essential elements for creating complex, well-integrated codebases that deliver optimal performance for all stakeholders.</p>
          <p className="about__text"> My commitment is to ensure that every project I undertake is built with a foundation of quality and maintainability, fostering innovation and efficiency in every aspect of development.</p>
     </div> */}
     </>

    )
  }
  
  export default Hero
  