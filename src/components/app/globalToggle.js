import { useContext } from "react";
import { RulebookContext } from "../../context/rulebookContext";

function GlobalToggle() {
  const { setOpenSectionList, wasAllOpened, setWasAllOpened } = useContext(RulebookContext);

  const openEverything = () => {
    if (wasAllOpened) {
      setOpenSectionList(new Set());
      setWasAllOpened(false);
    } else {
      // this could probably be less repetitive and more efficient, but it is temporary
      const allSections = new Set();
      for (let i = 1; i < 9; i++) {
        allSections.add(`${i}`);
        for (let j = 1; j < 12; j++) {
          const currCoord = `${i}.${j}`;
          allSections.add(currCoord);
          for (let k = 1; k < 9; k++) {
            const currCoord = `${i}.${j}.${k}`;
            allSections.add(currCoord);
            for (let l = 1; l < 9; l++) {
              const currCoord = `${i}.${j}.${k}.${l}`;
              allSections.add(currCoord);
            }
          }
        }
      }
      setWasAllOpened(true);
      setOpenSectionList(allSections);
    }
  };

  return (
    <button onClick={openEverything} className="globalToggle">
      {wasAllOpened ? "Hide All" : "Show All"}
    </button>
  );
}

export default GlobalToggle;
