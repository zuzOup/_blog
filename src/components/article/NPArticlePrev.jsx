import PropTypes from "prop-types";

import { date, day, title, src, char } from "../articlehelpers.jsx";
import { useState } from "react";

function NPArticlePrev({ data, dayInTitle, articleId }) {
  const [isHover, setIsHover] = useState(false);

  const hoverIn = () => {
    setIsHover(true);
  };

  const hoverOut = () => {
    setIsHover(false);
  };

  return (
    <a className="NPlink left" href={`./${articleId}`}>
      <div
        className={isHover ? "NPImg NPactiveImgPrev" : "NPImg"}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <img src={src(data.preview.url, 150)} alt={data.preview.alt} />
      </div>
      <div className="NPspacer" onMouseEnter={hoverIn} onMouseLeave={hoverOut}></div>
      <div className="NPdivPrev NPdiv">
        <span
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          className={isHover ? "NPspan NPspanActive" : "NPspan"}
        >
          <div>{char("🢘")}&nbsp;</div>
          <p>Předchozí článek</p>
        </span>
        <p onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          {dayInTitle ? `${day(data.date)} - ${data.title}` : `${title(data.title)}`}
        </p>
        <p onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="NPdate">
          {date(data.date)}
        </p>
      </div>
    </a>
  );
}

export default NPArticlePrev;

NPArticlePrev.propTypes = {
  data: PropTypes.object,
  dayInTitle: PropTypes.bool,
  articleId: PropTypes.string,
};
