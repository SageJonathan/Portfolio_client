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
import { useState } from "react";
import { useViewObserver } from "../../utils/viewObserver";

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
  const [currentImageIndexMicrosoft, setCurrentImageIndexMicrosoft] =
    useState(0);
  const [headerRef, isVisible] = useViewObserver(0.1);

  const galleries = {
    AvAI: [AvAI, AvAI1, AvAI2, AvAI3],
    Instock: [Instock, Instock1, Instock2, Instock3, Instock4],
    Microsoft: [Microsoft, Microsoft1, Microsoft2, Microsoft3, Microsoft4],
  };

  const handleNext = (setCurrentIndex, images) => () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (setCurrentIndex, images) => () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h2
        ref={headerRef}
        className={`project__section-header ${isVisible ? "animate" : ""}`}
      >
        Recent Projects
      </h2>
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
              This full-stack web application{" "}
              <span className="project__description-text--bold">
                centralizes professional-grade snowpack and weather data
              </span>{" "}
              to enhance avalanche mitigation. It streamlines operations,
              sharing quality information with recreational users through{" "}
              <span className="project__description-text--bold">
                customizable privacy settings.
              </span>{" "}
              Designed for both professionals and recreational users, the
              platform ensures secure data control, promotes seamless
              collaboration, and{" "}
              <span className="project__description-text--bold">
                offers AI for advanced query,{" "}
              </span>
              focusing on efficiency, safety, and scalability.
            </p>
          </div>
        </div>

        {/* Warehouse Tracker */}
        <div className="project__container">
          <div className="project__img-container">
            <Gallery
              images={galleries.Instock}
              currentIndex={currentImageIndexInstock}
              onPrev={handlePrev(
                setCurrentImageIndexInstock,
                galleries.Instock
              )}
              onNext={handleNext(
                setCurrentImageIndexInstock,
                galleries.Instock
              )}
              altPrefix="Warehouse Tracker"
            />
          </div>
          <div className="project__description-container">
            <h3 className="project__description-header">Warehouse Tracker</h3>
            <p className="project__description-text">
              <span className="project__description-text--bold">
                Collaboratively developed{" "}
              </span>
              a full-stack Warehouse Tracker app with a team of four, designed
              to optimize inventory management and {" "}
              <span className="project__description-text--bold">
                enable real-time tracking of goods. {" "}
              </span>
              This solution enhances operational efficiency with accurate,
              up-to-date stock information, streamlines logistics through
              improved data visibility and reporting, supports all CRUD
              operations, and {" "}
              <span className="project__description-text--bold">
                ensures robust database security with client and server-side
                protection.
              </span>
            </p>
          </div>
        </div>

        {/* Microsoft Hackathon */}
        <div className="project__container">
          <div className="project__img-container">
            <Gallery
              images={galleries.Microsoft}
              currentIndex={currentImageIndexMicrosoft}
              onPrev={handlePrev(
                setCurrentImageIndexMicrosoft,
                galleries.Microsoft
              )}
              onNext={handleNext(
                setCurrentImageIndexMicrosoft,
                galleries.Microsoft
              )}
              altPrefix="Microsoft Hackathon"
            />
          </div>
          <div className="project__description-container">
            <h3 className="project__description-header">Microsoft Hackathon</h3>
            <p className="project__description-text">
              At a 24-hour Microsoft hackathon, our team developed an{" "}
              <span className="project__description-text--bold">
               application to boost AI adoption in Canada.
              </span>{" "}
              Using grassroots methods, the app offers hands-on AI learning and
              experimentation,
              <span className="project__description-text--bold">
              {" "} allowing users to integrate AI into their workflows.
              </span>{" "}
              We proposed incentives and strategies to address privacy concerns
              and build trust in Microsoft’s AI tools,{" "}
              <span className="project__description-text--bold">
                {" "}
                focusing on enhancing user engagement and confidence in AI
                technologies.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
