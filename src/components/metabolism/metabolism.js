import Crosslink from "../crosslink/crosslink";
import { topics } from "../../context/rulebookContext";

import "./metabolism.css";

const Metabolism = ({ fight, flight, focus, self, near, far, pairLeft, pairRight }) => {
  const label = `${(fight && "Fight") ?? (flight && "Flight") ?? (focus && "Focus") ?? (self && "Self") ?? (near && "Near") ?? (far && "Far")}`;
  const cssLabel = label.toLowerCase();
  const topic = label.toUpperCase();
  return (
    <Crosslink
      inverted={self || near || far}
      target={topics[topic]}
      className={`metabolism ${cssLabel} ${pairLeft ? "pair-left" : ""} ${pairRight ? "pair-right" : ""}`}
    >
      {label}
    </Crosslink>
  );
};

export default Metabolism;
