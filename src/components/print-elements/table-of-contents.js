import Break from "../break/break";
import "./print-elements.css";

const Contents = () => {
  return (
    <div className="contentsPage">
      <h2>Table of Contents</h2>
      <ul className="contentsList">
        <li>
          <h3>
            Introduction <span className="pageNumber">3</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>The Setting</span> <span className="pageNumber">5</span>
            </li>
            <li>
              <span>Basic Gameplay</span> <span className="pageNumber">6</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Characters <span className="pageNumber">7</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Creating Characters</span> <span className="pageNumber">9</span>
            </li>
            <li>
              <span>Physcial Origins</span> <span className="pageNumber">11</span>
            </li>
            <li>
              <span>Hidden Origins</span> <span className="pageNumber">14</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Gameplay <span className="pageNumber">17</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Challenges</span> <span className="pageNumber">19</span>
            </li>
            <li>
              <span>Stress</span> <span className="pageNumber">21</span>
            </li>
            <li>
              <span>Injury & States</span> <span className="pageNumber">22</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Combat <span className="pageNumber">24</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Combat Flow</span> <span className="pageNumber">26</span>
            </li>
            <li>
              <span>Combat Situations</span> <span className="pageNumber">27</span>
            </li>
            <li>
              <span>Equipment</span> <span className="pageNumber">28</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Actions <span className="pageNumber">29</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Attack Actions</span> <span className="pageNumber">31</span>
            </li>
            <li>
              <span>Basic Actions</span> <span className="pageNumber">31</span>
            </li>
            <li>
              <span>Reactions</span> <span className="pageNumber">32</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Experience
            <span className="pageNumber">34</span>
          </h3>
          <ul className="contentsList childList">
            <li>
              <span>Using Entanglements</span> <span className="pageNumber">36</span>
            </li>
            <li>
              <span>Using Cascade Events</span> <span className="pageNumber">36</span>
            </li>
          </ul>
        </li>
      </ul>
      <Break />
      <ul className="contentsList">
        <li>
          <h3>
            Entanglements
            <span className="pageNumber">38</span>
          </h3>
          <ul className="contentsList childList">
            <li className="contentEntanglement">
              <span>Fight + Self</span> <span className="pageNumber">40</span>
            </li>
            <li className="contentStyleName">
              <span>Strong Style</span> <span className="pageNumber">40</span>
            </li>
            <li className="contentStyleName">
              <span>Schizosomata Style</span> <span className="pageNumber">41</span>
            </li>
            <li className="contentEntanglement">
              <span>Fight + Near</span> <span className="pageNumber">43</span>
            </li>
            <li className="contentStyleName">
              <span>Smooth Style</span> <span className="pageNumber">44</span>
            </li>
            <li className="contentStyleName">
              <span>Electromagnetism Style</span> <span className="pageNumber">45</span>
            </li>
            <li className="contentEntanglement">
              <span>Fight + Far</span> <span className="pageNumber">47</span>
            </li>
            <li className="contentStyleName">
              <span>Sharp Style</span> <span className="pageNumber">47</span>
            </li>
            <li className="contentStyleName">
              <span>Evocation Style</span> <span className="pageNumber">49</span>
            </li>
            <li className="contentEntanglement">
              <span>Flight + Self</span> <span className="pageNumber">50</span>
            </li>
            <li className="contentStyleName">
              <span>Tough Style</span> <span className="pageNumber">50</span>
            </li>
            <li className="contentStyleName">
              <span>Abjuration Style</span> <span className="pageNumber">52</span>
            </li>
            <li className="contentEntanglement">
              <span>Flight + Near</span> <span className="pageNumber">55</span>
            </li>
            <li className="contentStyleName">
              <span>Mobile Style</span> <span className="pageNumber">55</span>
            </li>
            <li className="contentStyleName">
              <span>Gravitonertia Style</span> <span className="pageNumber">56</span>
            </li>
            <li className="contentEntanglement">
              <span>Flight + Far</span> <span className="pageNumber">58</span>
            </li>
            <li className="contentStyleName">
              <span>Quick Style</span> <span className="pageNumber">58</span>
            </li>
            <li className="contentStyleName">
              <span>Pneumaplegia Style</span> <span className="pageNumber">60</span>
            </li>
            <li className="contentEntanglement">
              <span>Focus + Self</span> <span className="pageNumber">62</span>
            </li>
            <li className="contentStyleName">
              <span>Confident Style</span> <span className="pageNumber">62</span>
            </li>
            <li className="contentStyleName">
              <span>Sublimation Style</span> <span className="pageNumber">64</span>
            </li>
            <li className="contentEntanglement">
              <span>Focus + Near</span> <span className="pageNumber">67</span>
            </li>
            <li className="contentStyleName">
              <span>Bright Style</span> <span className="pageNumber">67</span>
            </li>
            <li className="contentStyleName">
              <span>Chromodynamism Style</span> <span className="pageNumber">70</span>
            </li>
            <li className="contentEntanglement">
              <span>Focus + Far</span> <span className="pageNumber">72</span>
            </li>
            <li className="contentStyleName">
              <span>Alert Style</span> <span className="pageNumber">72</span>
            </li>
            <li className="contentStyleName">
              <span>Telethesia Style</span> <span className="pageNumber">74</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Contents;
