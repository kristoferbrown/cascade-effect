import { Fragment } from "react";
// import Metabolism from "../metabolism/metabolism";
// import EventName from "./event-name";

const SpecializationDescription = ({ intro = "", ranks = [] }) => {
  return (
    <Fragment>
      {intro}
      {ranks.map((rankContent, index) => (
        <Fragment key={index}>
          <h5 key={index} className="entanglementRank subheader">
            Rank {index + 1}
          </h5>
          {rankContent}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default SpecializationDescription;
