import { useEffect, useRef, useState } from 'react';
import './Mission.scss';


function useOnScreen(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1} 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); 
      }
    };
  }, [ref]);

  return isVisible;
}

function Mission() {
  const headerRef = useRef(null);
  const isHeaderVisible = useOnScreen(headerRef);

  return (
    <div className="mission">
      <h2
        ref={headerRef}
        className={`mission__header ${isHeaderVisible ? 'animate' : ''}`}
      >
        Mission Statement
      </h2>
      <p className="mission__text">
        I am committed to redefining what is possible.
      </p>
      <p className="mission__text">
        My goal is to deliver solutions that not only solve problems but also
        inspire and empower users, setting new benchmarks in the industry.
      </p>
    </div>
  );
}

export default Mission;
