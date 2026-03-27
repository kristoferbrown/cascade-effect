import EventName from "./event-name";

const EventDescription = ({ description = "", eventName = "", intro = "", linkTarget = "" }) => {
  return (
    <>
      <h3>
        The <EventName name={eventName} linkTarget={linkTarget} /> Cascade Event
      </h3>
      <p>{intro}</p>

      {description}
    </>
  );
};

export default EventDescription;
