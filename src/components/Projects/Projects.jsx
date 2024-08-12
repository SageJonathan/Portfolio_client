
import "./Projects.scss";
import AvAI from "../../assets/images/avai.png";
import AvAI1 from "../../assets/images/avai1.png";
import AvAI2 from "../../assets/images/avai2.png";
import AvAI3 from "../../assets/images/avai3.png";
import Instock from "../../assets/images/instock.png";
import Instock1 from "../../assets/images/instock1.png";
import Instock2 from "../../assets/images/instock2.png";
import Instock3 from "../../assets/images/instock3.png";
import Instock4 from "../../assets/images/instock4.png";
import Microsoft from "../../assets/images/microsoft.png";
import Microsoft1 from "../../assets/images/microsoft1.png";
import Microsoft2 from "../../assets/images/microsoft2.png";
import Microsoft3 from "../../assets/images/microsoft3.png";
import Microsoft4 from "../../assets/images/microsoft4.png";
import React, { useState } from "react";

const Gallery = ({ images, currentIndex, onPrev, onNext, altPrefix }) => (
  <div className="project__gallery">
    <img
      className="project__img"
      src={images[currentIndex]}
      alt={`${altPrefix} ${currentIndex + 1}`}
    />
    <div className="project__gallery-controls">
      <button
        className="project__gallery-controler project__gallery-controler--prev"
        onClick={onPrev}
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <button
        className="project__gallery-controler project__gallery-controler--next"
        onClick={onNext}
        aria-label="Next Image"
      >
        &gt;
      </button>
    </div>
  </div>
);

function Projects() {
  const [currentImageIndexAvAI, setCurrentImageIndexAvAI] = useState(0);
  const [currentImageIndexInstock, setCurrentImageIndexInstock] = useState(0);
  const [currentImageIndexMicrosoft, setCurrentImageIndexMicrosoft] = useState(0);

  const galleries = {
    AvAI: [AvAI, AvAI1, AvAI2, AvAI3],
    Instock: [Instock, Instock1, Instock2, Instock3,Instock4],
    Microsoft: [Microsoft, Microsoft1, Microsoft2, Microsoft3, Microsoft4],
  };

  const handleNext = (setCurrentIndex, images) => () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (setCurrentIndex, images) => () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h2 className="project__section-header">Projects</h2>
      <div className="project">
        {/* Avalanche AI */}
        <div className="project__container">
          <div className="project__img-container">
            <Gallery
              images={galleries.AvAI}
              currentIndex={currentImageIndexAvAI}
              onPrev={handlePrev(setCurrentImageIndexAvAI, galleries.AvAI)}
              onNext={handleNext(setCurrentImageIndexAvAI, galleries.AvAI)}
              altPrefix="Avalanche AI"
            />
          </div>
          <div className="project__description-container">
            <h3 className="project__description-header">Avalanche AI</h3>
            <p className="project__description-text">
              This web application is designed to enhance avalanche forecasting
              and safety. It provides a centralized hub for logging snow pit and
              field observation data, organizing avalanche operations, and
              accessing weather and snowpack history. The platform supports both
              professional avalanche forecasters and recreational users,
              featuring team collaboration tools and an AI assistant.
            </p>
          </div>
        </div>
        
        {/* Warehouse Tracker */}
        <div className="project__container">
          <div className="project__img-container">
            <Gallery
              images={galleries.Instock}
              currentIndex={currentImageIndexInstock}
              onPrev={handlePrev(setCurrentImageIndexInstock, galleries.Instock)}
              onNext={handleNext(setCurrentImageIndexInstock, galleries.Instock)}
              altPrefix="Warehouse Tracker"
            />
          </div>
          <div className="project__description-container">
            <h3 className="project__description-header">Warehouse Tracker</h3>
            <p className="project__description-text">
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
        
        {/* Microsoft Hackathon */}
        <div className="project__container">
          <div className="project__img-container">
            <Gallery
              images={galleries.Microsoft}
              currentIndex={currentImageIndexMicrosoft}
              onPrev={handlePrev(setCurrentImageIndexMicrosoft, galleries.Microsoft)}
              onNext={handleNext(setCurrentImageIndexMicrosoft, galleries.Microsoft)}
              altPrefix="Microsoft Hackathon"
            />
          </div>
          <div className="project__description-container">
            <h3 className="project__description-header">Microsoft Hackathon</h3>
            <p className="project__description-text">
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
