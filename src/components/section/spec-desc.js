import { Fragment } from "react";
// import Metabolism from "../metabolism/metabolism";
// import EventName from "./event-name";

const SpecializationDescription = ({ intro = "", ranks = [], rank3Met }) => {
  return (
    <Fragment>
      {intro}
      {ranks.map((rankContent, index) => (
        <Fragment key={index}>
          <h5 key={index} className="entanglementRank subheader">
            Rank {index + 1}
          </h5>
          {/* {index === 2 && rank3Met ? (
            <p>
              Your <Metabolism {...rank3Met} /> score increases by 1.
            </p>
          ) : null} */}
          {rankContent}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default SpecializationDescription;
