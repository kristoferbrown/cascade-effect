import './roll.css';

export const Die = ({attribute = 'no-att'}) => {

  return (
    <span className={`die ${attribute}-border`}>
      <span className={`diePip ${attribute}-bg`}/>
      <span className={`diePip ${attribute}-bg`}/>
      <span className={`diePip ${attribute}-bg`}/>
      <span className={`diePip ${attribute}-bg`}/>
      <span className={`diePip ${attribute}-bg`}/>
      <span className={`diePip ${attribute}-bg`}/>
    </span>
  );
}

const Roll = ({children, attribute = 'no-att', skill}) => {

  return (
    <span 
      className={`rulebookRoll ${attribute}-bg`} 
    >
      <Die attribute={attribute} />
      {attribute}
      {skill ? ` + ${skill}` : ''}
      {children}
    </span>
  );
}

export default Roll;