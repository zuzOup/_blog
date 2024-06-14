import PropTypes from "prop-types";

import parse from "html-react-parser";

import Weather from "./Weather";
import ArticleSection from "./ArticleSection";

import { day, date, titleVol } from "../articlehelpers";

import "../../Styles/Articles/ArticleContent.css";


function ArticleContent({ allData, articleId }) {
  
  const header = allData[articleId].header;

  const order = allData[articleId].article_order;
  const articleData = allData[articleId].articles;

  const weatherData = allData[articleId].header.place;

  return (
    <article>
      <div className="day">
        <p>{day(header.date)}</p>
      </div>
      <h1 className="articleTitle">{parse(titleVol(header.title))}</h1>
      <hr />
      <h2>{date(header.date)}</h2>
      <ArticleSection articleData={articleData} order={order} />
      <Weather weatherData={weatherData} date={allData[articleId].header.date} />
    </article>
  );
}

export default ArticleContent;

ArticleContent.propTypes = {
  allData: PropTypes.object,
  articleId: PropTypes.string,
};
