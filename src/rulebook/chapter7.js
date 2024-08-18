import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Section from "../components/section/section";

function Chapter7() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section coordinates={"7"} header="Classified Information">
      <p>
        This chapter will contain information about GMing, how to run the game, and the secret supernatural parts of the
        setting.
      </p>
    </Section>
  );
}

export default Chapter7;
