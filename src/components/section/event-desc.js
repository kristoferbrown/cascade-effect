import EventName from "./event-name";

const EventDescription = ({
  description = "",
  eventName = "",
  inductionTime = "",
  intro = "",
  metrics = [],
  linkTarget = "",
}) => {
  return (
    <>
      <h3>
        The <EventName name={eventName} linkTarget={linkTarget} /> Cascade Event
      </h3>
      <p>{intro}</p>
      <h5>Induction Time</h5>
      <p>{inductionTime}</p>
      <h5>Metrics</h5>
      {metrics.map((metric) => (
        <p key={metric.name}>
          <strong>{metric.name}</strong>: {metric.value}
        </p>
      ))}

      {description}
    </>
  );
};

export default EventDescription;
