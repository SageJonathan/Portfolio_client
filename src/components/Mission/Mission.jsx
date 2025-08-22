import "./Mission.scss";
import { useViewObserver } from "../../utils/viewObserver";

function Services() {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <div className="services">
      <div className="services__header">
        <h2
          ref={headerRef}
          className={`services__title ${isVisible ? "animate" : ""}`}
        >
          Our Services
        </h2>
        <p className="services__subtitle">
          Strategic solutions that drive business transformation
        </p>
      </div>

      <div className="services__grid">
        <div className="service-card">
          <div className="service-card__icon">🚀</div>
          <h3 className="service-card__title">Custom Web Development</h3>
          <p className="service-card__description">
            Enterprise-grade applications engineered from the ground up,
            designed to scale with your business and exceed user expectations.
          </p>
          <ul className="service-card__features">
            <li>Responsive design & mobile optimization</li>
            <li>Intuitive user experience & interface design</li>
            <li>Robust database architecture & API development</li>
            <li>Performance optimization & comprehensive testing</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-card__icon">🛒</div>
          <h3 className="service-card__title">E-commerce Solutions</h3>
          <p className="service-card__description">
            Complete digital commerce platforms with enterprise security,
            advanced inventory management, and actionable business intelligence.
          </p>
          <ul className="service-card__features">
            <li>Secure payment gateway integration</li>
            <li>Advanced inventory & order management</li>
            <li>Comprehensive customer account systems</li>
            <li>Real-time analytics & reporting tools</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-card__icon">⚡</div>
          <h3 className="service-card__title">Platform Optimization</h3>
          <p className="service-card__description">
            Strategic enhancements that boost performance, strengthen security,
            and unlock new capabilities for your existing applications.
          </p>
          <ul className="service-card__features">
            <li>Performance optimization & speed improvements</li>
            <li>Security audits & vulnerability assessments</li>
            <li>Strategic feature development & integration</li>
            <li>Ongoing maintenance & technical support</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-card__icon">💡</div>
          <h3 className="service-card__title">Technical Consulting</h3>
          <p className="service-card__description">
            Expert guidance on technology strategy, architecture decisions, and
            digital transformation initiatives that align with business
            objectives.
          </p>
          <ul className="service-card__features">
            <li>Technology strategy & roadmap planning</li>
            <li>System architecture & infrastructure design</li>
            <li>Team training & technical mentoring</li>
            <li>Project management & delivery oversight</li>
          </ul>
        </div>
      </div>

      <div className="services__process">
        <h3 className="services__process-title">Our Proven Process</h3>
        <div className="services__process-steps">
          <div className="process-step">
            <div className="process-step__number">1</div>
            <h4 className="process-step__title">Discovery & Strategy</h4>
            <p className="process-step__description">
              Understanding your business goals and defining technical strategy
            </p>
          </div>
          <div className="process-step">
            <div className="process-step__number">2</div>
            <h4 className="process-step__title">Architecture & Planning</h4>
            <p className="process-step__description">
              Designing system architecture and creating detailed project
              roadmap
            </p>
          </div>
          <div className="process-step">
            <div className="process-step__number">3</div>
            <h4 className="process-step__title">Development & Testing</h4>
            <p className="process-step__description">
              Building your solution with iterative development and testing
            </p>
          </div>
          <div className="process-step">
            <div className="process-step__number">4</div>
            <h4 className="process-step__title">Launch & Support</h4>
            <p className="process-step__description">
              Deploying your solution and providing ongoing support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
