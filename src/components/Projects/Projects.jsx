import { useState } from "react";
import { useViewObserver } from "../../utils/viewObserver";
import "./Projects.scss";
import Instock from "../../assets/images/instock.png";
import Instock1 from "../../assets/images/instock1.png";
import Instock2 from "../../assets/images/instock2.png";
import Instock3 from "../../assets/images/instock3.png";
import Instock4 from "../../assets/images/instock4.png";
import SolarWatch from "../../assets/images/solarWatch.webp";
import SolarWatch1 from "../../assets/images/solarWatch1.webp";
import SolarWatch2 from "../../assets/images/solarWatch2.webp";
import SolarWatch3 from "../../assets/images/solarWatch3.webp";
import ArtStore from "../../assets/images/artStore.webp";
import ArtStore1 from "../../assets/images/artStore1.webp";
import ArtStore2 from "../../assets/images/artStore2.webp";
import ArtStore3 from "../../assets/images/artStore3.webp";
import ArtStore4 from "../../assets/images/artStore4.webp";
import ArtStore5 from "../../assets/images/artStore5.webp";

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
  const [currentImageIndexArtStore, setCurrentImageIndexArtStore] = useState(0);
  const [currentImageIndexInstock, setCurrentImageIndexInstock] = useState(0);
  const [currentImageIndexSolarWatch, setCurrentImageIndexSolarWatch] =
    useState(0);
  const [headerRef, isVisible] = useViewObserver(0.1);

  const galleries = {
    ArtStore: [ArtStore, ArtStore1, ArtStore2, ArtStore3, ArtStore4, ArtStore5],
    Instock: [Instock, Instock1, Instock2, Instock3, Instock4],
    SolarWatch: [SolarWatch, SolarWatch1, SolarWatch2, SolarWatch3],
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
        Featured Projects
      </h2>
      <div className="project">
        {/* Art Store*/}
        <div className="project__container">
          <div className="project__img-container">
            <Gallery
              images={galleries.ArtStore}
              currentIndex={currentImageIndexArtStore}
              onPrev={handlePrev(
                setCurrentImageIndexArtStore,
                galleries.ArtStore
              )}
              onNext={handleNext(
                setCurrentImageIndexArtStore,
                galleries.ArtStore
              )}
              altPrefix="Louise Guay Art Store"
            />
          </div>
          <div className="project__description-container">
            <h3 className="project__description-header">Art Commerce</h3>

            <p className="project__description-text">
              This full-stack web application{" "}
              <span className="project__description-text--bold">
                empowers artists to showcase, sell, and manage their artwork
                effortlessly
              </span>{" "}
              through a streamlined online platform. It automates the entire
              sales flow, from browsing to shipping, allowing artists to{" "}
              <span className="project__description-text--bold">
                focus on their craft without worrying about logistics.
              </span>{" "}
              Built for both creators and buyers, the platform ensures{" "}
              <span className="project__description-text--bold">
                secure transactions, dynamic gallery browsing,
              </span>{" "}
              and smooth shipping processes, all optimized for performance,
              simplicity, and scalability.
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
              to optimize inventory management and{" "}
              <span className="project__description-text--bold">
                enable real-time tracking of goods.{" "}
              </span>
              This solution enhances operational efficiency with accurate,
              up-to-date stock information, streamlines logistics through
              improved data visibility and reporting, supports all CRUD
              operations, and{" "}
              <span className="project__description-text--bold">
                ensures robust database security with client and server-side
                protection.
              </span>
            </p>
          </div>
        </div>

        {/* Solar Watch */}
        <div className="project__container">
          <div className="project__img-container">
            <Gallery
              images={galleries.SolarWatch}
              currentIndex={currentImageIndexSolarWatch}
              onPrev={handlePrev(
                setCurrentImageIndexSolarWatch,
                galleries.SolarWatch
              )}
              onNext={handleNext(
                setCurrentImageIndexSolarWatch,
                galleries.SolarWatch
              )}
              altPrefix="Microsoft Hackathon"
            />
          </div>
          <div className="project__description-container">
            <h3 className="project__description-header">Solar Watch</h3>

            <p className="project__description-text">
              Solar Watch is a weather and solar data application{" "}
              <span className="project__description-text--bold">
                designed to help users plan their outdoor activities with
                confidence
              </span>
              . It delivers real-time forecasts, visibility conditions, and{" "}
              <span className="project__description-text--bold">
                detailed solar information like sunrise, sunset, and golden hour
              </span>
              . Optimized for mobile and desktop, Solar Watch{" "}
              <span className="project__description-text--bold">
                ensures you stay connected to changing conditions wherever you
                are
              </span>
              . Built for adventurers, professionals, and anyone who values
              accuracy, the platform focuses on speed, simplicity, and a
              seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
