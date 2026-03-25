import SpecializationDescription from "./spec-desc";

const EntanglementDescription = ({ intro = "", hidMet = "", physMet = "", esoStyle = "", intStyle = "" }) => {
  return (
    <SpecializationDescription
      intro={intro}
      ranks={[
        <>
          <p>Increase your {hidMet} score by 1.</p>
          <p>
            Choose a Style between {intStyle} and {esoStyle}, gain the first rank of this Style now.
          </p>
        </>,
        <>
          <p>Increase your {hidMet} score by 1.</p>
          <p>
            Whichever style you didn't choose in the previous rank becomes available, you can now spend experience on it
            to buy ranks.
          </p>
          <p>Gain the first rank of a Specialization from either Style of these Styles you have the first rank of.</p>
        </>,
        <>
          <p>
            Increase your {hidMet} and {physMet} scores by 1.
          </p>
          <p>Gain the first rank of a Specialization from either Style of these Styles you have the first rank of.</p>
        </>,
      ]}
    />
  );
};

export default EntanglementDescription;
