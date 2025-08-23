import "./Hero.scss";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="hero" role="banner" aria-label="Hero section">
      <div className="hero__overlay" aria-hidden="true"></div>
      <div className="hero__content">
        <div className="hero__text-section">
          <header className="hero__header">
            <h1 className="hero__title">
              <span className="hero__title-main">SAGE CODES</span>
              <span className="hero__title-motto">
                Robust. Clean. Scalable.
              </span>
            </h1>
            <p className="hero__subtitle">
              Enterprise-Grade Development Consultancy
            </p>
          </header>
          <p className="hero__description">
            We architect and build digital solutions that transform businesses.
            From concept to production, we deliver scalable web applications
            that drive measurable growth and competitive advantage.
          </p>
          <nav
            className="hero__cta"
            role="navigation"
            aria-label="Call to action"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hero__cta-primary"
              aria-label="Start your project - navigate to contact form"
            >
              Start Your Project
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hero__cta-secondary"
              aria-label="Explore our services - navigate to services section"
            >
              Explore Services
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Hero;
