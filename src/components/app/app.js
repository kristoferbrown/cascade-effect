import "./app.css";
import RulebookProvider from "../../context/rulebookContext";
import GlobalToggle from "./globalToggle";

import Chapter1 from "../../rulebook/chapter1";
import Chapter2 from "../../rulebook/chapter2";
import Chapter3 from "../../rulebook/chapter3";
import Chapter4 from "../../rulebook/chapter4";
import Chapter5 from "../../rulebook/chapter5";
import Chapter6 from "../../rulebook/chapter6";
// import Chapter7 from "../../rulebook/chapter7";

function App() {
  return (
    <RulebookProvider>
      <div className="App">
        <GlobalToggle />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
        {/* <Chapter7 /> */}
        <div className="section depth1">
          <h3>Character Sheets</h3>
        </div>
      </div>
    </RulebookProvider>
  );
}

export default App;
