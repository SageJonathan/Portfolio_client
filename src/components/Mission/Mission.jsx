import "./Mission.scss";
import { useViewObserver } from "../../utils/viewObserver";

function Services() {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <section
      className="services"
      id="services"
      role="region"
      aria-labelledby="services-title"
    >
      <div className="services__header">
        <h2
          ref={headerRef}
          id="services-title"
          className={`services__title ${isVisible ? "animate" : ""}`}
        >
          Our Services
        </h2>
        <p className="services__subtitle">
          Strategic solutions that drive business transformation
        </p>
      </div>

      <div
        className="services__grid"
        role="list"
        aria-label="Service offerings"
      >
        <article className="service-card" role="listitem">
          <div className="service-card__icon" aria-hidden="true">
            🚀
          </div>
          <h3 className="service-card__title">Custom Web Development</h3>
          <p className="service-card__description">
            Enterprise-grade applications engineered from the ground up,
            designed to scale with your business and exceed user expectations.
          </p>
          <ul className="service-card__features" role="list">
            <li role="listitem">Responsive design & mobile optimization</li>
            <li role="listitem">
              Intuitive user experience & interface design
            </li>
            <li role="listitem">
              Robust database architecture & API development
            </li>
            <li role="listitem">
              Performance optimization & comprehensive testing
            </li>
          </ul>
        </article>

        <article className="service-card" role="listitem">
          <div className="service-card__icon" aria-hidden="true">
            🛒
          </div>
          <h3 className="service-card__title">E-commerce Solutions</h3>
          <p className="service-card__description">
            Complete digital commerce platforms with enterprise security,
            advanced inventory management, and actionable business intelligence.
          </p>
          <ul className="service-card__features" role="list">
            <li role="listitem">Secure payment gateway integration</li>
            <li role="listitem">Advanced inventory & order management</li>
            <li role="listitem">Comprehensive customer account systems</li>
            <li role="listitem">Real-time analytics & reporting tools</li>
          </ul>
        </article>

        <article className="service-card" role="listitem">
          <div className="service-card__icon" aria-hidden="true">
            ⚡
          </div>
          <h3 className="service-card__title">Platform Optimization</h3>
          <p className="service-card__description">
            Strategic enhancements that boost performance, strengthen security,
            and unlock new capabilities for your existing applications.
          </p>
          <ul className="service-card__features" role="list">
            <li role="listitem">
              Performance optimization & speed improvements
            </li>
            <li role="listitem">Security audits & vulnerability assessments</li>
            <li role="listitem">Strategic feature development & integration</li>
            <li role="listitem">Ongoing maintenance & technical support</li>
          </ul>
        </article>

        <article className="service-card" role="listitem">
          <div className="service-card__icon" aria-hidden="true">
            💡
          </div>
          <h3 className="service-card__title">Technical Consulting</h3>
          <p className="service-card__description">
            Expert guidance on technology strategy, architecture decisions, and
            digital transformation initiatives that align with business
            objectives.
          </p>
          <ul className="service-card__features" role="list">
            <li role="listitem">Technology strategy & roadmap planning</li>
            <li role="listitem">System architecture & infrastructure design</li>
            <li role="listitem">Team training & technical mentoring</li>
            <li role="listitem">Project management & delivery oversight</li>
          </ul>
        </article>
      </div>

      <div
        className="services__process"
        role="region"
        aria-labelledby="process-title"
      >
        <h3 id="process-title" className="services__process-title">
          Our Proven Process
        </h3>
        <div
          className="services__process-steps"
          role="list"
          aria-label="Development process steps"
        >
          <div className="process-step" role="listitem">
            <div className="process-step__number" aria-hidden="true">
              1
            </div>
            <h4 className="process-step__title">Discovery & Strategy</h4>
            <p className="process-step__description">
              Understanding your business goals and defining technical strategy
            </p>
          </div>
          <div className="process-step" role="listitem">
            <div className="process-step__number" aria-hidden="true">
              2
            </div>
            <h4 className="process-step__title">Architecture & Planning</h4>
            <p className="process-step__description">
              Designing system architecture and creating detailed project
              roadmap
            </p>
          </div>
          <div className="process-step" role="listitem">
            <div className="process-step__number" aria-hidden="true">
              3
            </div>
            <h4 className="process-step__title">Development & Testing</h4>
            <p className="process-step__description">
              Building your solution with iterative development and testing
            </p>
          </div>
          <div className="process-step" role="listitem">
            <div className="process-step__number" aria-hidden="true">
              4
            </div>
            <h4 className="process-step__title">Launch & Support</h4>
            <p className="process-step__description">
              Deploying your solution and providing ongoing support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
