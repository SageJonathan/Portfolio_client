import "./Contact.scss";
import { useViewObserver } from "../../utils/viewObserver";

function Contact() {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <div className={`contact ${isVisible ? "animate" : ""}`}>
      <div className="contact__content">
        <div className="contact__header">
          <h2 className="contact__title">
            Ready to Transform Your{" "}
            <span ref={headerRef} className={`contact__title--highlight`}>
              Business?
            </span>
          </h2>
          <p className="contact__subtitle">
            Let's discuss how we can architect the perfect digital solution to
            accelerate your growth and achieve your strategic objectives
          </p>
        </div>

        <div className="contact__main">
          <div className="contact__form-section">
            <h3 className="contact__form-title">Start Your Project</h3>
            <form className="contact__form">
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__form-input"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="company" className="contact__form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="contact__form-input"
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__form-input"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="phone" className="contact__form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="contact__form-input"
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="service" className="contact__form-label">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="contact__form-select"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">
                    Custom Web Development
                  </option>
                  <option value="ecommerce">E-commerce Solutions</option>
                  <option value="optimization">Platform Optimization</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-textarea"
                  rows="5"
                  placeholder="Tell us about your project goals, timeline, and business objectives..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact__form-submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact__info-section">
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-description">
              We're here to help you succeed. Reach out to discuss your project
              or learn more about how we can drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
