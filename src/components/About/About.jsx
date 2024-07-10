import "./About.scss"
import Author from "../../assets/images/author.jpg"

function About() {

    return (
     <div className="test">
       <div class="name__container">
           <div class="name__box">
              <div class="name__title">
                <span class="name__block"></span>
                <h1>Jonathan S<span></span></h1>
              </div>
              <div class="name__role">
              <div class="name__block"></div>
              <p>Fullstack Developer</p>
              </div>
              <div className="name__img-container">
              <img className="name__img" src={Author} alt="" />
              </div>
            </div>
          </div>
          <div className="text__container">
              <p className="text__text">
              As a Full Stack Engineer, I believe in robust, clean, and scalable code. Moving into the future, 
              I prioritize modularity and thorough documentation as essential elements for creating complex, well-integrated codebases that deliver optimal performance for all stakeholders.
               My commitment is to ensure that every project I undertake is built with a foundation of quality and maintainability, fostering innovation and efficiency in every aspect of development.
              </p>
          </div>
     </div>
    )
  }
  
  export default About
  