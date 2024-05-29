import { createContext, useState } from "react";

export const RulebookContext = createContext();

export const topics = {
  ACTION: "4.4.2",
  ADVANTAGE: "3.4.3",
  ATTACK: "4.4.3",
  CASCADE_EVENT: "5.5",
  CHALLENGE: "3.3",
  COMPLICATION: "3.4",
  DICE: "3.4.6",
  CONSEQUENCE: "3.4.7",
  CONTROLLED: "3.4.4",
  DIFFICULTY: "3.3.2",
  DISSOCIATION: "4.5.1",
  ENTANGLEMENTS: "5",
  EXHALE_ACTION: "4.2",
  FAR: "3.2.3",
  FIGHT: "3.1.1",
  FLIGHT: "3.1.2",
  FOCUS: "3.1.3",
  FULL_ACTION: "4.3",
  GAMEMASTER: "1.2",
  HIDDEN_METAB: "3.2",
  INHALE_ACTION: "4.1",
  INJURY: "4.1",
  METABOLISM: "3",
  NEAR: "3.2.2",
  PAIRING: "3.3.3",
  PHYS_METAB: "3.1",
  PUSH_YRSELF: "3.3.11",
  PROGRESS: "3.3.4",
  REACTION: "4.4.4",
  RISKY: "3.4.6",
  ROUNDS: "4.4.1",
  SELF: "3.2.1",
  STRENUOUS: "3.4.6",
  STRESS: "3.3.6",
  STRESSFUL: "3.4.5",
  TAKE_TIME: "3.4.2",
  THREAT: "4.3.4",
  TRAITS: "3.4.1",
};

const sectionsOpenByDefault = [
  // intro subsections
  "1.1.1",
  "1.2.1",
];

const RulebookProvider = ({ children }) => {
  const [openSectionList, setOpenSectionList] = useState(new Set(sectionsOpenByDefault));
  const [isAllForcedOpen, setIsAllForcedOpen] = useState(false);

  return (
    <RulebookContext.Provider
      value={{
        openSectionList,
        setOpenSectionList,
        isAllForcedOpen,
        setIsAllForcedOpen,
      }}
    >
      {children}
    </RulebookContext.Provider>
  );
};

export default RulebookProvider;
