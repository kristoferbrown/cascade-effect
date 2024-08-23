import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Section from "../components/section/section";

function ChapterGM() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section coordinates={"8"} header="Classified Information">
      <p>
        This chapter will contain information about GMing, how to run the game, and the secret supernatural parts of the
        setting.
      </p>
    </Section>
  );
}

export default ChapterGM;
