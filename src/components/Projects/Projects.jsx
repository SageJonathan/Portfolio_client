import "./Projects.scss"
import thumbnail from "../../assets/images/thumbnail.png"

function Projects() {

    return (
      <>
      <h2 className="section__header">Projects</h2>
     <div className="project">
      <div className="project__container">
          <div className="video__container">
            <img src={thumbnail} alt="" />
          </div>
          <div className="skills__container">
            <h3 className="skills__header">Avalanche AI</h3>
          </div>
      </div>
      <div className="project__container">
         <div className="video__container">
         <img src={thumbnail} alt="" />
         </div>
         <div className="skills__container">
            <h3 className="skills__header">Warehouse Tracker</h3>
         </div>
      </div>
      <div className="project__container">
        <div className="video__container">
        <img src={thumbnail} alt="" />
        </div>
        <div className="skills__container">
            <h3 className="skills__header">Microsoft Hackaton</h3>
        </div>
      </div>
     </div>
     </>
    )
  }
  
  export default Projects
  