import "./chapter-intro-spread.css";
import Logomark from "../../svgs/logomark";

const ChapterIntroSpread = ({ title, chapterNumber, leftPageContent, rightPageContent }) => {
  return (
    <div className="ChapterIntroSpread">
      <div className="ChapterIntroSpreadPage ChapterIntroSpreadLeftPage">
        <h1 className="hiddenOnScreen chapterIntroLeftTitle">Chapter {chapterNumber}</h1>
        <div className="ChapterIntroSpreadPageContent">
          <div className="pageContentText">{leftPageContent}</div>
          <div className="pageContentLogo">
            <Logomark showRight={false} />
          </div>
        </div>
      </div>
      <div className="ChapterIntroSpreadPage ChapterIntroSpreadRightPage classified">
        <div className="ChapterIntroSpreadPageContent">
          <div className="pageContentLogo">
            <Logomark showLeft={false} />
          </div>
          <div className="pageContentText">{rightPageContent}</div>
        </div>
        <h1 className="hiddenOnScreen chapterIntroRightTitle">{title}</h1>
      </div>
    </div>
  );
};

export default ChapterIntroSpread;
