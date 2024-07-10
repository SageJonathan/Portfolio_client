import "./Projects.scss"
import thumbnail from "../../assets/images/thumbnail.png"

function Projects() {

    return (
     <div>
      <div className="project__container">
          <div className="video__container">
            <img src={thumbnail} alt="" />
          </div>
          <div className="skills__container">

          </div>
      </div>
      <div className="project__container">
         <div className="video__container">
         <img src={thumbnail} alt="" />
         </div>
         <div className="skills__container">

         </div>
      </div>
      <div className="project__container">
        <div className="video__container">
        <img src={thumbnail} alt="" />
        </div>
        <div className="skills__container">

        </div>
      </div>
     </div>
    )
  }
  
  export default Projects
  