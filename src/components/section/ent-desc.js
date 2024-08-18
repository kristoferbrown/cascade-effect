import { Fragment } from "react";
import Metabolism from "../metabolism/metabolism";
import EventName from "../section/event-name";

const EntanglementDescription = ({
  intro = "",
  ranks = [],
  rank3Met,
  rank1Action,
  rank1Event,
  rank1EventTarget = "",
}) => {
  return (
    <Fragment>
      {intro}
      {ranks.map((rankContent, index) => (
        <Fragment key={index}>
          <h5 key={index} className="entanglementRank subheader">
            Rank {index + 1}
          </h5>
          {index === 0 && rank1Action ? <p>{`Your ${rank1Action} action bonus increases by 1.`}</p> : null}
          {index === 0 && rank1Event ? (
            <p>
              Your <EventName name={rank1Event} linkTarget={rank1EventTarget} /> action bonus increases by 1.
            </p>
          ) : null}
          {index === 2 && rank3Met ? (
            <p>
              Your <Metabolism {...rank3Met} /> score increases by 1.
            </p>
          ) : null}
          {rankContent}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default EntanglementDescription;
