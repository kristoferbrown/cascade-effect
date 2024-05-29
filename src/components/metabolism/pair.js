import Metabolism from "./metabolism";

import "./metabolism.css";

const Pair = ({ fight, flight, focus, self, near, far }) => {
  return (
    <span className="metabolism-pair">
      <Metabolism fight={fight} flight={flight} focus={focus} pairLeft />
      <span className="pair-bond"></span>
      <Metabolism self={self} near={near} far={far} pairRight />
    </span>
  );
};

export default Pair;
