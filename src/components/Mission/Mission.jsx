import './Mission.scss';
import { useViewObserver } from '../../utils/viewObserver';

function Mission() {
  const [headerRef, isVisible] = useViewObserver(0.1);

  return (
    <div className="mission">
      <h2
        ref={headerRef}
        className={`mission__header ${isVisible ? 'animate' : ''}`}
      >
        Mission Statement
      </h2>
      <p className="mission__text">
        I am committed to redefining what is possible.
      </p>
      <p className="mission__text">
      My mission is to deliver innovative, user-centric solutions
      <br></br>That solve real-world problems and empower businesses to scale.
      </p>
      
    </div>
  );
}

export default Mission;
