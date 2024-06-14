import PropTypes from "prop-types";

import { date, day, title, src, char } from "../articlehelpers.jsx";
import { useState } from "react";

function NPArticleNext({ data, dayInTitle, articleId }) {
  const [isHover, setIsHover] = useState(false);

  const hoverIn = () => {
    setIsHover(true);
  };

  const hoverOut = () => {
    setIsHover(false);
  };

  return (
    <a className="NPlink right" href={`./${articleId}`}>
      <div className="NPdivNext NPdiv">
        <span
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          className={isHover ? "NPspan NPspanActive" : "NPspan"}
        >
          <p>Následující článek</p>
          <div>&nbsp;{char("🢚")}</div>
        </span>
        <p onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          {dayInTitle ? `${day(data.date)} - ${data.title}` : `${title(data.title)}`}
        </p>
        <p onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="NPdate">
          {date(data.date)}
        </p>
      </div>
      <div className="NPspacer" onMouseEnter={hoverIn} onMouseLeave={hoverOut}></div>
      <div
        className={isHover ? "NPImg NPactiveImgNext" : "NPImg"}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <img src={src(data.preview.url, 150)} alt={data.preview.alt} />
      </div>
    </a>
  );
}

export default NPArticleNext;

NPArticleNext.propTypes = {
  data: PropTypes.object,
  dayInTitle: PropTypes.bool,
  articleId: PropTypes.string,
};
