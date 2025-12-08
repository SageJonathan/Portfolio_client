import "./About.scss";
import Author2 from "../../assets/images/author.png";
import { useViewObserver } from "../../utils/viewObserver";

const About = () => {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <div className="about">
      <div className="about__content">
        <div className="about__text-section">
          <h2
            ref={headerRef}
            className={`about__title ${isVisible ? "animate" : ""}`}
          >
            Why Choose Sage Codes?
          </h2>

          <div className="about__expertise">
            <div className="expertise-item">
              <h3 className="expertise-item__title">Technical Excellence</h3>
              <p className="expertise-item__description">
                We leverage cutting-edge technologies and industry best
                practices to deliver robust, scalable solutions that stand the
                test of time and evolve with your business needs.
              </p>
            </div>

            <div className="expertise-item">
              <h3 className="expertise-item__title">Business-First Approach</h3>
              <p className="expertise-item__description">
                Every technical decision we make serves a strategic business
                purpose. We understand that technology is a powerful enabler for
                achieving your business objectives and driving measurable
                results.
              </p>
            </div>

            <div className="expertise-item">
              <h3 className="expertise-item__title">Strategic Partnership</h3>
              <p className="expertise-item__description">
                We operate as an extension of your team, maintaining transparent
                communication and providing regular project updates throughout
                the development lifecycle.
              </p>
            </div>
          </div>

          <div className="about__values">
            <h3 className="about__values-title">Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-item__icon">🎯</span>
                <span className="value-item__text">Excellence First</span>
              </div>
              <div className="value-item">
                <span className="value-item__icon">🤝</span>
                <span className="value-item__text">Trust & Transparency</span>
              </div>
              <div className="value-item">
                <span className="value-item__icon">🚀</span>
                <span className="value-item__text">Innovation</span>
              </div>
              <div className="value-item">
                <span className="value-item__icon">📈</span>
                <span className="value-item__text">Results-Driven</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__founder">
          <div className="about__founder-image">
            <img src={Author2} alt="Jonathan Sage - Founder & Lead Engineer" />
          </div>
          <div className="about__founder-info">
            <h3 className="about__founder-name">Jonathan Sage</h3>
            <p className="about__founder-title">Founder & Lead Engineer</p>
            <p className="about__founder-bio">
              Strategic engineer with proven international leadership experience,
              Jonathan excels at enabling seamless
              global collaboration. With expertise in strategic planning, risk
              management, and team coordination, he delivers enterprise software
              solutions that drive measurable business results.
            </p>
            <div className="about__languages">
              <span className="about__languages-label">Languages:</span>
              <span className="about__languages-list">
                English, French, Spanish, Portuguese
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
