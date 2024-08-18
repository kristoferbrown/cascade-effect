import { useContext } from "react";
import { RulebookContext } from "../../context/rulebookContext";

import "./crosslink.css";

const Crosslink = ({ children, className = "", inverted = false, target }) => {
  const { openSectionList, setOpenSectionList } = useContext(RulebookContext);

  const openAndGoToTarget = () => {
    const targets = target.split(".");
    const targetAndParents = targets.map((digit, index) => targets.slice(0, index + 1).join("."));
    if (targetAndParents.every((coords) => openSectionList.has(coords))) {
      scrollToElement(target, targets.length - 1);
    } else {
      let currentTarget = "";
      let newTargets = new Set(openSectionList);
      targets.forEach((coordinate, index) => {
        if (!index) {
          currentTarget = coordinate;
          newTargets.add(currentTarget);
        } else {
          currentTarget = currentTarget + "." + coordinate;
          newTargets.add(currentTarget);
        }
      });
      setOpenSectionList(newTargets);
      setTimeout(() => {
        scrollToElement(currentTarget, targets.length - 1);
      }, 400);
    }
  };

  const scrollToElement = (elementId, depth = 0) => {
    const element = document.getElementById(`section${elementId}`);
    const elementTop = element?.getBoundingClientRect().top + window.scrollY;
    const offset = elementTop - depth * 68;
    window.scrollTo(0, offset);
  };

  return (
    <>
      {" "}
      <a
        className={`crosslink${inverted ? " inverted" : ""} ${className ? className : ""}`}
        href={`#${target}`}
        onClick={openAndGoToTarget}
      >
        {children}
      </a>{" "}
    </>
  );
};

export default Crosslink;
