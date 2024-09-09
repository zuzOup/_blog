import PropTypes from "prop-types";
import parse from "html-react-parser";

function Article_Insta({ data }) {
  return <div className="insta">{parse(data.insta)}</div>;
}

export default Article_Insta;

Article_Insta.propTypes = {
  data: PropTypes.object,
};
