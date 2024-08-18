import { createContext, useRef, useState } from "react";

export const RulebookContext = createContext();

const RulebookProvider = ({ children }) => {
  const [openSectionList, setOpenSectionList] = useState(new Set());
  const [isAllForcedOpen, setIsAllForcedOpen] = useState(false);
  const [wasAllOpened, setWasAllOpened] = useState(false);
  const topicMap = useRef({});

  return (
    <RulebookContext.Provider
      value={{
        openSectionList,
        setOpenSectionList,
        isAllForcedOpen,
        setIsAllForcedOpen,
        wasAllOpened,
        setWasAllOpened,
        topicMap,
      }}
    >
      {children}
    </RulebookContext.Provider>
  );
};

export default RulebookProvider;
