import { useContext } from "react";
import Crosslink from "../crosslink/crosslink";
import { RulebookContext } from "../../context/rulebookContext";

const SpecializationLink = ({ name }) => {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;
  const target = linkMap[name.split(" ").join("")];

  return (
    <Crosslink isSpecialization target={target}>
      {name}
    </Crosslink>
  );
};

export default SpecializationLink;
