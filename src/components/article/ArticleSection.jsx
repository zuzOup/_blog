import PropTypes from "prop-types";
import { useEffect } from "react";

import ArticleTypeSwitch from "./ArticleTypeSwitch";

function ArticleSection({ articleData, order }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(1);
  }, []);

  return (
    <section className="ArticleSection">
      {order.map((x) => {
        const type = articleData[x].article_type;
        return <ArticleTypeSwitch key={x} type={type} data={articleData[x]} />;
      })}
    </section>
  );
}

export default ArticleSection;

ArticleSection.propTypes = {
  articleData: PropTypes.any,
  order: PropTypes.array,
};
