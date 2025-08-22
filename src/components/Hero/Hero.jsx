import "./Hero.scss";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <div className="hero__text-section">
          <h1 className="hero__title">
            <span className="hero__title-main">SAGE CODES</span>
            <span className="hero__title-motto">Robust. Clean. Scalable.</span>
          </h1>
          <p className="hero__subtitle">
            Enterprise-Grade Development Consultancy
          </p>
          <p className="hero__description">
            We architect and build digital solutions that transform businesses.
            From concept to production, we deliver scalable web applications
            that drive measurable growth and competitive advantage.
          </p>
          <div className="hero__cta">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hero__cta-primary"
            >
              Start Your Project
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hero__cta-secondary"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
