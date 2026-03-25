import SpecializationDescription from "./spec-desc";

const StyleDescription = ({ intro, styleName, associatedAction, rank1Bonus }) => {
  return (
    <SpecializationDescription
      intro={intro}
      ranks={[
        <>
          {rank1Bonus ? <p>{rank1Bonus}</p> : null}
          {associatedAction ? (
            <p>You gain an allocation bonus to equal to your rank in this Style to {associatedAction}</p>
          ) : null}
          <p>Gain the first rank of a Specialization within the {styleName} style.</p>
        </>,
        <p>Gain the first rank of a Specialization within the {styleName} style.</p>,
        <p>Gain the first rank of a Specialization within the {styleName} style.</p>,
      ]}
    />
  );
};

export default StyleDescription;
