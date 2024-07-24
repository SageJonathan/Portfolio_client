import "./Projects.scss";
import AvAI from "../../assets/images/avai.png";
import Instock from "../../assets/images/instock.png";
import microsoft from "../../assets/images/microsoft.png";

function Projects() {
  return (
    <>
      <h2 className="section__header">Projects</h2>
      <div className="project">
        <div className="project__container project__container--1">
          <div className="video__container">
            <img className="video__thumbnail" src={AvAI} alt="" />
          </div>
          <div className="description__container">
            <h3 className="description__header">Avalanche AI</h3>
            <p className="description__text">
              This web application is designed to enhance avalanche forecasting
              and safety. It provides a centralized hub for logging snow pit and
              field observation data, organizing avalanche operations, and
              accessing weather and snowpack history. The platform supports both
              professional avalanche forecasters and recreational users,
              featuring team collaboration tools and an AI assistant.{" "}
            </p>
          </div>
        </div>
        <div className="project__container project__container--2">
          <div className="video__container">
            <img className="video__thumbnail" src={Instock} alt="" />
          </div>
          <div className="description__container">
            <h3 className="description__header">Warehouse Tracker</h3>
            <p className="description__text">
              Collaboratively developed a comprehensive full-stack Warehouse
              Tracker application with a team of four, designed to optimize
              inventory management and enable real-time tracking of goods. This
              solution enhances operational efficiency by providing accurate,
              up-to-date information on stock levels and movement, and
              streamlines logistics processes through improved data visibility
              and reporting.
            </p>
          </div>
        </div>
        <div className="project__container project__container--3">
          <div className="video__container">
            <img className="video__thumbnail" src={microsoft} alt="" />
          </div>
          <div className="description__container">
            <h3 className="description__header">Microsoft Hackaton</h3>
            <p className="description__text">
              At a 24-hour Microsoft hackathon, our cross-collaborative team
              developed solutions to accelerate AI adoption in Canada. We built
              an application that enables users to learn and experiment with AI
              in their workflows, providing hands-on experience. Additionally,
              we proposed learning incentives and in-house trained Small
              Language Models (SLMs) to address privacy concerns and enhance
              trust in Microsoft's AI tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
