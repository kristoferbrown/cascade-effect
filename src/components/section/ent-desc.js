import { Fragment } from "react";

const EntanglementDescription = ({ intro = "", ranks = [] }) => {
  return (
    <Fragment>
      {intro}
      {ranks.map((rank, index) => (
        <Fragment key={index}>
          <h5 key={index} className="entanglementRank subheader">
            Rank {index + 1}
          </h5>
          {rank}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default EntanglementDescription;
