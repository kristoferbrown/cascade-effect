import { useContext } from "react";
import { RulebookContext } from "../../context/rulebookContext";

function GlobalToggle() {
  const { isAllForcedOpen, setIsAllForcedOpen, setOpenSectionList } = useContext(RulebookContext);

  return (
    <button 
      onClick={() => {
        setIsAllForcedOpen(!isAllForcedOpen);
        setOpenSectionList(new Set());
      }} 
      className="globalToggle"
    >
      { isAllForcedOpen ? 'Hide All' : 'Show All'}
    </button>
  );
}

export default GlobalToggle;
