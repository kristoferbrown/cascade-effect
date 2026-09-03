import classnames from "classnames";
import "./origin-page.css";

const OriginPage = ({ preamble, prompts, title, isClassified }) => {
  return (
    <div className={classnames("originPage", { classified: isClassified })}>
      <div className="originPageContent">
        {title ? <h2 className="hiddenOnScreen originPageTitle">{title}</h2> : null}
        <div className="originPagePreamble">{preamble}</div>
        <div className="originPagePrompts">{prompts}</div>
      </div>
    </div>
  );
};

export default OriginPage;
