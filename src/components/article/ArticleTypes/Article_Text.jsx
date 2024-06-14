import PropTypes from "prop-types";
import parse from "html-react-parser";

function Article_Text({ data }) {
  return <p className="text">{parse(`${data.text}`)}</p>;
}

export default Article_Text;

Article_Text.propTypes = {
  data: PropTypes.object,
};
