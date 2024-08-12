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
        My goal is to deliver solutions that not only solve problems but also
        inspire and empower users, setting new benchmarks in the industry.
      </p>
    </div>
  );
}

export default Mission;
