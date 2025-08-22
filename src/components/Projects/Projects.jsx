import { useState } from "react";
import { useViewObserver } from "../../utils/viewObserver";
import Button from "../Button/button";
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

const CaseStudy = ({
  images,
  currentIndex,
  onPrev,
  onNext,
  altPrefix,
  title,
  description,
  results,
  technologies,
  link,
  linkText,
}) => (
  <div className="case-study">
    <div className="case-study__gallery">
      <img
        className="case-study__image"
        src={images[currentIndex]}
        alt={`${altPrefix} ${currentIndex + 1}`}
      />
      <div className="case-study__gallery-controls">
        <button
          className="case-study__gallery-control case-study__gallery-control--prev"
          onClick={onPrev}
          aria-label="Previous Image"
        >
          &lt;
        </button>
        <button
          className="case-study__gallery-control case-study__gallery-control--next"
          onClick={onNext}
          aria-label="Next Image"
        >
          &gt;
        </button>
      </div>
    </div>

    <div className="case-study__content">
      <h3 className="case-study__title">{title}</h3>

      <div className="case-study__description">
        <p>{description}</p>
      </div>

      <div className="case-study__results">
        <h4 className="case-study__results-title">Business Impact</h4>
        <ul className="case-study__results-list">
          {results.map((result, index) => (
            <li key={index} className="case-study__result-item">
              {result}
            </li>
          ))}
        </ul>
      </div>

      <div className="case-study__technologies">
        <h4 className="case-study__technologies-title">Technologies Used</h4>
        <div className="case-study__tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="case-study__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a href={link} className="case-study__link">
        <Button text={linkText} />
      </a>
    </div>
  </div>
);

function CaseStudies() {
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
    <div className="case-studies">
      <div className="case-studies__header">
        <h2
          ref={headerRef}
          className={`case-studies__title ${isVisible ? "animate" : ""}`}
        >
          Client Success Stories
        </h2>
        <p className="case-studies__subtitle">
          Real projects, real results, real business impact
        </p>
      </div>

      <div className="case-studies__grid">
        <CaseStudy
          images={galleries.ArtStore}
          currentIndex={currentImageIndexArtStore}
          onPrev={handlePrev(setCurrentImageIndexArtStore, galleries.ArtStore)}
          onNext={handleNext(setCurrentImageIndexArtStore, galleries.ArtStore)}
          altPrefix="Louise Guay Art Store"
          title="Art Commerce Platform"
          description="A comprehensive e-commerce solution for a professional artist, featuring dynamic galleries, secure payment processing, and automated shipping calculations."
          results={[
            "Increased online sales by 300% in first 6 months",
            "Reduced order processing time by 80%",
            "Improved customer satisfaction with streamlined checkout",
          ]}
          technologies={["React", "Node.js", "Stripe", "PostgreSQL", "AWS"]}
          link="https://www.louiseguay.ca/"
          linkText="View Live Site"
        />

        <CaseStudy
          images={galleries.Instock}
          currentIndex={currentImageIndexInstock}
          onPrev={handlePrev(setCurrentImageIndexInstock, galleries.Instock)}
          onNext={handleNext(setCurrentImageIndexInstock, galleries.Instock)}
          altPrefix="Warehouse Tracker"
          title="Inventory Management System"
          description="A full-stack warehouse tracking application developed for a logistics company, enabling real-time inventory monitoring and streamlined operations."
          results={[
            "Improved inventory accuracy by 95%",
            "Reduced stock-out incidents by 70%",
            "Streamlined warehouse operations workflow",
          ]}
          technologies={[
            "React",
            "Express.js",
            "MySQL",
            "Node.js",
            "Bootstrap",
          ]}
          link="https://github.com/chinghang0504/instock_client"
          linkText="View Project"
        />

        <CaseStudy
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
          altPrefix="Solar Watch"
          title="Cross-Platform Weather App"
          description="A mobile-first weather application providing detailed solar information, real-time forecasts, and outdoor activity planning tools."
          results={[
            "50,000+ active users within first year",
            "4.8/5 star rating across app stores",
            "Increased user engagement with solar features",
          ]}
          technologies={[
            "React Native",
            "TypeScript",
            "Weather APIs",
            "Firebase",
            "Redux",
          ]}
          link="https://www.solarwatch.ca/"
          linkText="View Live App"
        />
      </div>
    </div>
  );
}

export default CaseStudies;
