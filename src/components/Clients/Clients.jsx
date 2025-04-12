import { useViewObserver } from "../../utils/viewObserver";
import './Clients.scss';

// import images

const client_data = [
    {
      name: "Meta",
      desc: "",
      img: {},
    },
    {
        name: "Tek Systems",
        desc: "",
        img: {},
    },
    {
        name: "Luminary AI",
        desc: "",
        img: {},
    },
    {
        name: "Peak Stratagem",
        desc: "",
        img: {},
    },
    {
        name: "Louise Guay Art",
        desc: "",
        img: {},
    },
  ];
  

function Clients() {
     const [headerRef, isVisible] = useViewObserver(0.1);
    return (
        <>
        <h2  ref={headerRef}
         className={`clients__header ${isVisible ? "animate" : ""}`}
        >Clients</h2>
          <div className="clients">
         
         
         {/* Map through object for clients  */}





         </div>
        </>
      
    );
  }
  
  export default Clients;
  