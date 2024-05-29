import './chapter-intro.css';

const ChapterIntro = ({ children}) => {

  return (
    <div className="chapterIntro">
      { children }
    </div>
  );
}

export default ChapterIntro;