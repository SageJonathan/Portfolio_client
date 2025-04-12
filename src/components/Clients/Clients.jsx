import { useViewObserver } from "../../utils/viewObserver";
import './Clients.scss';

import meta from "../../assets/logos/meta.webp"
import tek from "../../assets/logos/tek.webp"
import luminary from "../../assets/logos/luminary.webp"
import peak from "../../assets/logos/peak.webp"
import louiseg from "../../assets/logos/louiseg.webp"

const client_data = [
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
    {
        name: "Luminary AI",
        img: luminary,
        link: "",
    },
    {
        name: "Peak Stratagem",
        img: peak,
        link: "https://www.peakstratagem.com/",
    },
    {
        name: "Louise Guay Art",
        img: louiseg,
        link: "https://www.louiseguay.ca/",
    },
  ];
  

  function Clients() {
    const [headerRef, isVisible] = useViewObserver(0.1);
  
    return (
      <>
        <h2
          ref={headerRef}
          className={`clients__header ${isVisible ? "animate" : ""}`}
        >
          Clients
        </h2>
  
        <div className="clients__container">
          {client_data.map((client, index) => (
            <div key={index} className="clients__instance">
              <a href={client.link} className="clients__instance--link">
              <img src={client.img} alt={client.name} className="clients__instance--logo" />
              <h3 className="clients__instance--name">{client.name}</h3>
              </a>
            </div>
          ))}
        </div> 
      </>
    );
  }
  
  export default Clients;
  