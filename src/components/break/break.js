import './break.css';

const Break = ({page = false}) => {

  return (
    <div className={`break${page ? ' pageBreak' : ''}`} />
  );
}

export default Break;