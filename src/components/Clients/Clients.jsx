import { useViewObserver } from "../../utils/viewObserver";
import "./Clients.scss";

import meta from "../../assets/logos/meta.webp";
import tek from "../../assets/logos/tek.webp";
import luminary from "../../assets/logos/luminary.webp";
import peak from "../../assets/logos/peak.webp";
import louiseg from "../../assets/logos/louiseg.webp";
import peakEats from "../../assets/images/peakEats.png";

const consultancyPartners = [
  {
    name: "Meta",
    img: meta,
    link: "https://www.meta.com/ca/",
  },
  {
    name: "Tek Systems",
    img: tek,
    link: "https://www.teksystems.com/en-ca/",
  },
];

const clientsBuiltFor = [
  {
    name: "Peak Stratagem",
    img: peak,
    link: "https://www.peakstratagem.com/",
  },
  {
    name: "Luminary AI",
    img: luminary,
    link: "",
  },
  {
    name: "Louise Guay Art",
    img: louiseg,
    link: "https://www.louiseguay.ca/",
  },
  {
    name: "PeakEats",
    img: peakEats,
    link: "#", // You can update this with the actual PeakEats website link
  },
];

function Clients() {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <div className="clients">
      <h2
        ref={headerRef}
        className={`clients__header ${isVisible ? "animate" : ""}`}
      >
        Trusted by Industry Leaders
      </h2>

      <p className="clients__subtitle">
        We've partnered with innovative companies across diverse sectors,
        delivering exceptional results that drive measurable business growth and
        competitive advantage.
      </p>

      {/* Consultancy Partners Section */}
      <div className="clients__category">
        <h3 className="clients__category-title">Consultancy Partners</h3>
        <p className="clients__category-description">
          Global enterprises where we've provided strategic technical consulting
          and development expertise
        </p>
        <div className="clients__container clients__container--partners">
          {consultancyPartners.map((client, index) => (
            <div
              key={index}
              className="clients__instance clients__instance--partner"
            >
              <div className="clients__instance--content">
                <img
                  src={client.img}
                  alt={client.name}
                  className="clients__instance--logo"
                />
                <h3 className="clients__instance--name">{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients I've Built For Section */}
      <div className="clients__category">
        <h3 className="clients__category-title">Custom Solutions Delivered</h3>
        <p className="clients__category-description">
          Innovative applications and platforms we've engineered from concept to
          production, tailored to specific business needs
        </p>
        <div className="clients__container clients__container--built">
          {clientsBuiltFor.map((client, index) => (
            <div
              key={index}
              className="clients__instance clients__instance--built"
            >
              <div className="clients__instance--content">
                <img
                  src={client.img}
                  alt={client.name}
                  className="clients__instance--logo"
                />
                <h3 className="clients__instance--name">{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
