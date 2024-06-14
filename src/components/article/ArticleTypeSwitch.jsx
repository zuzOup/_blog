import PropTypes from "prop-types";

import Article_Text from "./ArticleTypes/Article_Text";
import Article_TextImg from "./ArticleTypes/Article_TextImg";
import Article_Img from "./ArticleTypes/Article_Img";
import Article_Grid from "./ArticleTypes/Article_Grid";
import Article_Yt from "./ArticleTypes/Article_Yt";
import Article_Link from "./ArticleTypes/Article_Link";

function ArticleTypeSwitch({ type, data }) {
  {
    switch (type) {
      case "text":
        return <Article_Text data={data} />;
      case "textImg":
        return <Article_TextImg data={data} />;
      case "img":
        return <Article_Img data={data} />;
      case "grid":
        return <Article_Grid data={data} />;
      case "yt":
        return <Article_Yt data={data} />;
      case "link":
        return <Article_Link data={data} />;
      default:
        return null; // or throw an error for invalid componentName
    }
  }
}

export default ArticleTypeSwitch;

ArticleTypeSwitch.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
};
