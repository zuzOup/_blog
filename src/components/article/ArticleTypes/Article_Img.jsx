import PropTypes from "prop-types";
import Img from "./Img";

function Article_Img({ data }) {
  return <Img imgData={data.img} size={1200} />;
}

export default Article_Img;

Article_Img.propTypes = {
  data: PropTypes.object,
};
