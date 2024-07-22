import "./Projects.scss"
import thumbnail from "../../assets/images/thumbnail.png"
import AvAI from "../../assets/images/avai.png"
import Instock from "../../assets/images/instock.png"
import microsoft from "../../assets/images/microsoft.png"

function Projects() {

    return (
      <>
      <h2 className="section__header">Projects</h2>
     <div className="project">
      <div className="project__container project__container--1">
          <div className="video__container">
            <img  className="video__thumbnail" src={AvAI} alt="" />
          </div>
          <div className="description__container">
            <h3 className="description__header">Avalanche AI</h3>
            <p className="description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum saepe similique ex aut quaerat doloremque natus cum nulla. Voluptas pariatur doloremque non sunt nesciunt totam similique quod! Quia, placeat!</p>
          </div>
      </div>
      <div className="project__container project__container--2">
         <div className="video__container">
         <img className="video__thumbnail" src={Instock} alt="" />
         </div>
         <div className="description__container">
            <h3 className="description__header">Warehouse Tracker</h3>
            <p className="description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima culpa, architecto perspiciatis nisi asperiores incidunt reprehenderit ipsa veniam! Quis blanditiis magnam minima qui, quidem doloremque recusandae reprehenderit hic iusto. Est.</p>
         </div>
      </div>
      <div className="project__container project__container--3">
        <div className="video__container">
        <img className="video__thumbnail" src={microsoft} alt="" />
        </div>
        <div className="description__container">
            <h3 className="description__header">Microsoft Hackaton</h3>
            <p className="description__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo eveniet quaerat exercitationem pariatur, in sequi necessitatibus aliquid, eligendi magni cupiditate repudiandae? Illum suscipit dicta corporis! Minus esse corrupti assumenda!</p>
        </div>
      </div>
     </div>
     </>
    )
  }
  
  export default Projects
  