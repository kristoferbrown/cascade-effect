// import Crosslink from "../crosslink/crosslink";
import Pair from "../metabolism/pair";
import "./challengeParams.css";

const ChallengeParams = ({ pair, risk, effort, allocBonus, progBonus, goals }) => {
  return (
    <div className="challengeParams">
      <h5>Challenge Parameters</h5>
      <p>
        <strong>Metabolism Pair</strong>:{" "}
        <Pair
          fight={pair.fight}
          flight={pair.flight}
          focus={pair.focus}
          self={pair.self}
          near={pair.near}
          far={pair.far}
        />
      </p>
      <div className="challengeParams-row">
        <p>
          <strong>Risk</strong>:{" "}
          <span className={risk === "Low" ? "lowRiskEffortTag" : risk === "High" ? "highRiskEffortTag" : ""}>
            {risk ?? "medium"}
          </span>
        </p>
        <p>
          <strong>Effort</strong>:{" "}
          <span className={effort === "Low" ? "lowRiskEffortTag" : effort === "High" ? "highRiskEffortTag" : ""}>
            {effort ?? "medium"}
          </span>
        </p>
      </div>
      <div className="challengeParams-row">
        {allocBonus && (
          <p>
            <strong>Allocate Bonus</strong>: {allocBonus}
          </p>
        )}
        {progBonus && (
          <p>
            <strong>Progress Bonus</strong>: {progBonus}
          </p>
        )}
      </div>
      <p>
        <strong>Goals</strong>: {goals.map((goalText) => `${goalText}, `)}
      </p>
    </div>
  );
};

export default ChallengeParams;
