import Crosslink from "../crosslink/crosslink";

const EventName = ({ name = "", linkTarget = "" }) => {
  return (
    <Crosslink target={linkTarget} className="eventName">
      {name}
    </Crosslink>
  );
};

export default EventName;
