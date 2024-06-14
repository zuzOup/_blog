import PropTypes from "prop-types";

import NPArticleNext from "./NPArticleNext";
import NPArticlePrev from "./NPArticlePrev";

import "../../Styles/Articles/ArticleNextPrev.css";

function ArticleNextPrev({ articleDates, allData, articleId }) {
  const curr = articleDates.indexOf(articleId);
  const last = curr === articleDates.length - 1;
  const first = curr === 0;

  return (
    <div className="nextprev">
      {last ? (
        <div></div>
      ) : (
        <NPArticlePrev
          data={allData[articleDates[curr + 1]].header}
          dayInTitle={allData[articleDates[curr + 1]].dateInTitle}
          articleId={articleDates[curr + 1]}
        />
      )}
      {first ? (
        <div></div>
      ) : (
        <NPArticleNext
          data={allData[articleDates[curr - 1]].header}
          dayInTitle={allData[articleDates[curr - 1]].dateInTitle}
          articleId={articleDates[curr - 1]}
        />
      )}
    </div>
  );
}

export default ArticleNextPrev;

ArticleNextPrev.propTypes = {
  articleDates: PropTypes.array,
  allData: PropTypes.object,
  articleId: PropTypes.string,
};
