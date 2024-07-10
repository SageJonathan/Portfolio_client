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
          <div>
            <p>Helllo</p>
          </div>
     </div>
    )
  }
  
  export default About
  