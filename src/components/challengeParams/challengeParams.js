// import Crosslink from "../crosslink/crosslink";

import "./challengeParams.css";

const ChallengeParams = ({ metPair, risk, effort, allocBonus, progBonus, goals }) => {
  return (
    <div>
      <h5>Challenge Parameters</h5>
      <p>Pair: {metPair}</p>
      <p>Risk: {risk}</p>
      <p>Effort: {effort}</p>
      <h5>Bonuses</h5>
      <p>Allocate: {allocBonus}</p>
      <p>Progress: {progBonus}</p>
      <p>Goals: {goals.map((goalText) => goalText)}</p>
    </div>
  );
};

export default ChallengeParams;
