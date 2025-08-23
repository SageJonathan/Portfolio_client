import "./Contact.scss";
import { useViewObserver } from "../../utils/viewObserver";

function Contact() {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <section
      className="contact"
      id="contact"
      role="region"
      aria-labelledby="contact-title"
    >
      <div className="contact__content">
        <header className="contact__header">
          <h2 id="contact-title" className="contact__title">
            Ready to Transform Your{" "}
            <span ref={headerRef} className={`contact__title--highlight`}>
              Business?
            </span>
          </h2>
          <p className="contact__subtitle">
            Let's discuss how we can architect the perfect digital solution to
            accelerate your growth and achieve your strategic objectives
          </p>
        </header>

        <div className="contact__main">
          <article
            className="contact__form-section"
            role="region"
            aria-labelledby="form-title"
          >
            <h3 id="form-title" className="contact__form-title">
              Start Your Project
            </h3>
            <form
              className="contact__form"
              role="form"
              aria-labelledby="form-title"
            >
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    Name <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__form-input"
                    required
                    aria-required="true"
                    placeholder="Enter your full name"
                    aria-describedby="name-help"
                  />
                  <div id="name-help" className="sr-only">
                    Please enter your full name
                  </div>
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
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    Email <span aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__form-input"
                    required
                    aria-required="true"
                    placeholder="Enter your email address"
                    aria-describedby="email-help"
                  />
                  <div id="email-help" className="sr-only">
                    Please enter a valid email address
                  </div>
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
                    placeholder="Enter your phone number"
                    pattern="[0-9\-\+\s\(\)]+"
                    aria-describedby="phone-help"
                  />
                  <div id="phone-help" className="sr-only">
                    Please enter your phone number
                  </div>
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
                  aria-describedby="service-help"
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
                <div id="service-help" className="sr-only">
                  Please select a service you're interested in
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  Project Details <span aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-textarea"
                  rows="5"
                  placeholder="Tell us about your project goals, timeline, and business objectives..."
                  required
                  aria-required="true"
                  aria-describedby="message-help"
                ></textarea>
                <div id="message-help" className="sr-only">
                  Please describe your project details
                </div>
              </div>

              <button
                type="submit"
                className="contact__form-submit"
                aria-describedby="submit-help"
              >
                Send Message
              </button>
              <div id="submit-help" className="sr-only">
                Click to submit your project inquiry
              </div>
            </form>
          </article>

          <article
            className="contact__info-section"
            role="region"
            aria-labelledby="info-title"
          >
            <h3 id="info-title" className="contact__info-title">
              Let's Connect
            </h3>
            <p className="contact__info-description">
              We're here to help you succeed. Reach out to discuss your project
              or learn more about how we can drive your business forward.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
