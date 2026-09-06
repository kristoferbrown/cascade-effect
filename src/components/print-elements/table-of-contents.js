import Break from "../break/break";
import "./print-elements.css";

const Contents = () => {
  return (
    <div className="contentsPage">
      <h1>Table of Contents</h1>
      <ul className="contentsList">
        <li>
          <h3>
            Introduction <span className="pageNumber">4</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>The Setting</span> <span className="pageNumber">6</span>
            </li>
            <li>
              <span>Basic Gameplay</span> <span className="pageNumber">7</span>
            </li>
            <li>
              <span>Getting Started</span> <span className="pageNumber">8</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Characters <span className="pageNumber">9</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Creating Characters</span> <span className="pageNumber">11</span>
            </li>
            <li>
              <span>Physical Origins</span> <span className="pageNumber">12</span>
            </li>
            <li>
              <span>Hidden Origins</span> <span className="pageNumber">21</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Gameplay <span className="pageNumber">31</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Challenges</span> <span className="pageNumber">33</span>
            </li>
            <li>
              <span>Stress</span> <span className="pageNumber">37</span>
            </li>
            <li>
              <span>Injury & States</span> <span className="pageNumber">38</span>
            </li>
            <li>
              <span>Hidden Space</span> <span className="pageNumber">39</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Combat <span className="pageNumber">41</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Combat Flow</span> <span className="pageNumber">43</span>
            </li>
            <li>
              <span>Combat Geography</span> <span className="pageNumber">44</span>
            </li>
            <li>
              <span>Combat Tactics</span> <span className="pageNumber">45</span>
            </li>
            <li>
              <span>Equipment</span> <span className="pageNumber">45</span>
            </li>
            <li>
              <span>Hidden Space Combat</span> <span className="pageNumber">46</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Actions <span className="pageNumber">47</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Exhale Actions</span> <span className="pageNumber">49</span>
            </li>
            <li>
              <span>Inhale Actions</span> <span className="pageNumber">49</span>
            </li>
            <li>
              <span>Reactions</span> <span className="pageNumber">50</span>
            </li>
            <li>
              <span>Hidden Space Actions</span> <span className="pageNumber">51</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Experience
            <span className="pageNumber">52</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Using Entanglements</span> <span className="pageNumber">54</span>
            </li>
            <li>
              <span>Using Cascade Events</span> <span className="pageNumber">54</span>
            </li>
          </ul>
        </li>
      </ul>
      <Break />
      <ul className="contentsList">
        <li>
          <h3>
            Entanglements
            <span className="pageNumber">55</span>
          </h3>
          <ul className="contentsList childList">
            <li className="contentEntanglement">
              <span>Fight + Self</span> <span className="pageNumber">57</span>
            </li>
            <li className="contentStyleName">
              <span>Strong Style</span> <span className="pageNumber">57</span>
            </li>
            <li className="contentStyleName">
              <span>Schizosomata Style</span> <span className="pageNumber">59</span>
            </li>
            <li className="contentEntanglement">
              <span>Fight + Near</span> <span className="pageNumber">61</span>
            </li>
            <li className="contentStyleName">
              <span>Smooth Style</span> <span className="pageNumber">61</span>
            </li>
            <li className="contentStyleName">
              <span>Electromagnetism Style</span> <span className="pageNumber">63</span>
            </li>
            <li className="contentEntanglement">
              <span>Fight + Far</span> <span className="pageNumber">66</span>
            </li>
            <li className="contentStyleName">
              <span>Sharp Style</span> <span className="pageNumber">66</span>
            </li>
            <li className="contentStyleName">
              <span>Evocation Style</span> <span className="pageNumber">68</span>
            </li>
            <li className="contentEntanglement">
              <span>Flight + Self</span> <span className="pageNumber">71</span>
            </li>
            <li className="contentStyleName">
              <span>Tough Style</span> <span className="pageNumber">71</span>
            </li>
            <li className="contentStyleName">
              <span>Abjuration Style</span> <span className="pageNumber">72</span>
            </li>
            <li className="contentEntanglement">
              <span>Flight + Near</span> <span className="pageNumber">76</span>
            </li>
            <li className="contentStyleName">
              <span>Mobile Style</span> <span className="pageNumber">76</span>
            </li>
            <li className="contentStyleName">
              <span>Gravitonertia Style</span> <span className="pageNumber">78</span>
            </li>
            <li className="contentEntanglement">
              <span>Flight + Far</span> <span className="pageNumber">80</span>
            </li>
            <li className="contentStyleName">
              <span>Quick Style</span> <span className="pageNumber">80</span>
            </li>
            <li className="contentStyleName">
              <span>Pneumaplegia Style</span> <span className="pageNumber">82</span>
            </li>
            <li className="contentEntanglement">
              <span>Focus + Self</span> <span className="pageNumber">85</span>
            </li>
            <li className="contentStyleName">
              <span>Confident Style</span> <span className="pageNumber">85</span>
            </li>
            <li className="contentStyleName">
              <span>Sublimation Style</span> <span className="pageNumber">87</span>
            </li>
            <li className="contentEntanglement">
              <span>Focus + Near</span> <span className="pageNumber">90</span>
            </li>
            <li className="contentStyleName">
              <span>Bright Style</span> <span className="pageNumber">90</span>
            </li>
            <li className="contentStyleName">
              <span>Chromodynamism Style</span> <span className="pageNumber">92</span>
            </li>
            <li className="contentEntanglement">
              <span>Focus + Far</span> <span className="pageNumber">95</span>
            </li>
            <li className="contentStyleName">
              <span>Alert Style</span> <span className="pageNumber">95</span>
            </li>
            <li className="contentStyleName">
              <span>Telethesia Style</span> <span className="pageNumber">97</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Contents;
