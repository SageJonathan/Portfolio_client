
import "./Projects.scss";
import AvAI from "../../assets/images/avai.png";
import AvAI1 from "../../assets/images/avai1.png";
import AvAI2 from "../../assets/images/avai2.png";
import AvAI3 from "../../assets/images/avai3.png";
import Instock from "../../assets/images/instock.png";
import Instock1 from "../../assets/images/instock1.png";
import Instock2 from "../../assets/images/instock2.png";
import Instock3 from "../../assets/images/instock3.png";
import Microsoft from "../../assets/images/microsoft.png";
import Microsoft1 from "../../assets/images/microsoft1.png";
import Microsoft2 from "../../assets/images/microsoft2.png";
import Microsoft3 from "../../assets/images/microsoft3.png";
import Microsoft4 from "../../assets/images/microsoft4.png";
import React, { useState } from "react";

const Gallery = ({ images, currentIndex, onPrev, onNext, altPrefix }) => (
  <div className="gallery">
    <img
      className="gallery__image"
      src={images[currentIndex]}
      alt={`${altPrefix} ${currentIndex + 1}`}
    />
    <div className="gallery__controls">
      <button
        className="gallery__control gallery__control--prev"
        onClick={onPrev}
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <button
        className="gallery__control gallery__control--next"
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
    AvAI: [AvAI,AvAI1, AvAI2, AvAI3],
    Instock: [Instock,Instock1, Instock2, Instock3],
    Microsoft: [Microsoft,Microsoft1, Microsoft2, Microsoft3, Microsoft4],
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
      <h2 className="section__header">Projects</h2>
      <div className="project">
        {/* Avalanche AI */}
        <div className="project__container project__container--1">
          <div className="video__container">
            <img className="video__thumbnail" src={AvAI} alt="Avalanche AI" />
            <Gallery
              images={galleries.AvAI}
              currentIndex={currentImageIndexAvAI}
              onPrev={handlePrev(setCurrentImageIndexAvAI, galleries.AvAI)}
              onNext={handleNext(setCurrentImageIndexAvAI, galleries.AvAI)}
              altPrefix="Avalanche AI"
            />
          </div>
          <div className="description__container">
            <h3 className="description__header">Avalanche AI</h3>
            <p className="description__text">
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
        <div className="project__container project__container--2">
          <div className="video__container">
            <img className="video__thumbnail" src={Instock} alt="Warehouse Tracker" />
            <Gallery
              images={galleries.Instock}
              currentIndex={currentImageIndexInstock}
              onPrev={handlePrev(setCurrentImageIndexInstock, galleries.Instock)}
              onNext={handleNext(setCurrentImageIndexInstock, galleries.Instock)}
              altPrefix="Warehouse Tracker"
            />
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
        
        {/* Microsoft Hackathon */}
        <div className="project__container project__container--3">
          <div className="video__container">
            <img className="video__thumbnail" src={Microsoft} alt="Microsoft Hackathon" />
            <Gallery
              images={galleries.Microsoft}
              currentIndex={currentImageIndexMicrosoft}
              onPrev={handlePrev(setCurrentImageIndexMicrosoft, galleries.Microsoft)}
              onNext={handleNext(setCurrentImageIndexMicrosoft, galleries.Microsoft)}
              altPrefix="Microsoft Hackathon"
            />
          </div>
          <div className="description__container">
            <h3 className="description__header">Microsoft Hackathon</h3>
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
