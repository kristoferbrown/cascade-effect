import { useContext } from "react";
import Crosslink from "../crosslink/crosslink";
import { RulebookContext } from "../../context/rulebookContext";

import "./metabolism.css";

const Metabolism = ({ fight, flight, focus, self, near, far, pairLeft, pairRight }) => {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;
  const label = `${
    (fight && "Fight") ??
    (flight && "Flight") ??
    (focus && "Focus") ??
    (self && "Self") ??
    (near && "Near") ??
    (far && "Far")
  }`;

  const cssLabel = label.toLowerCase();
  return (
    <Crosslink
      inverted={self || near || far}
      target={linkMap[`Using${label}`]}
      className={`metabolism ${cssLabel} ${pairLeft ? "pair-left" : ""} ${pairRight ? "pair-right" : ""}`}
    >
      {label}
    </Crosslink>
  );
};

export default Metabolism;
