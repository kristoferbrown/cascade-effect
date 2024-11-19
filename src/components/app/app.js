import "./app.css";
import RulebookProvider from "../../context/rulebookContext";
import GlobalToggle from "./globalToggle";

import ChapterIntroduction from "../../rulebook/chapterIntroduction";
import ChapterCharacters from "../../rulebook/chapterCharacters";
import ChapterGameplay from "../../rulebook/chapterGameplay";
import ChapterCombat from "../../rulebook/chapterCombat";
import ChapterActions from "../../rulebook/chapterActions";
import ChapterExperience from "../../rulebook/chapterExperience";
import ChapterEntanglements from "../../rulebook/chapterEntanglements";
import FrontCover from "../print-elements/front-cover";
import Contents from "../print-elements/table-of-contents";
import BackCover from "../print-elements/back-cover";

function App() {
  return (
    <RulebookProvider>
      <div className="App">
        <FrontCover />
        <Contents />
        <GlobalToggle />
        <ChapterIntroduction />
        <ChapterCharacters />
        <ChapterGameplay />
        <ChapterCombat />
        <ChapterActions />
        <ChapterExperience />
        <ChapterEntanglements />
        <BackCover />

        {/* <Chapter7 /> */}
        <div className="section depth1 charSheetLink">
          <a
            className="crosslink"
            target="_blank"
            rel="noreferrer"
            href="https://cascade-effect.com/sheets/char-sheet-2.7.0.pdf"
          >
            Character Sheet (.pdf)
          </a>
        </div>
      </div>
    </RulebookProvider>
  );
}

export default App;
