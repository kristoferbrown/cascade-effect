import './rulebookStyle.css';

// this was used to highlight attributes like this <RulebookStyle attribute={ATT.FIN}>Lorem</RulebookStyle>
const RulebookStyle = ({attribute = 'no-att', children}) => {

  return (
    <span className={`rulebookStyle ${attribute}-bg`} >
      {children}
    </span>
  );
}

export default RulebookStyle;