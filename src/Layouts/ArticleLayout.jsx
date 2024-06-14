import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import HeaderSmall from "../components/HeaderSmall";
import Footer from "../components/Footer";
import ArticleContent from "../components/article/ArticleContent";
import NotFound from "../components/notFound/NotFound";
import ArticleNextPrev from "../components/article/ArticleNextPrev";

function ArticleLayout({ loaded, articleDates, allData }) {
  const { articleId } = useParams();

  if (loaded && articleDates.indexOf(articleId) === -1) {
    return <NotFound />;
  } else {
    return (
      <>
        <HeaderSmall backToMain={false} />
        <main className="mainSmall">
          {loaded && <ArticleContent allData={allData} articleId={articleId} />}
          {loaded && (
            <ArticleNextPrev
              articleDates={articleDates}
              allData={allData}
              articleId={articleId}
            />
          )}
        </main>
        <Footer />
      </>
    );
  }
}

ArticleLayout.propTypes = {
  loaded: PropTypes.bool,
  articleDates: PropTypes.any,
  allData: PropTypes.object,
};

export default ArticleLayout;
