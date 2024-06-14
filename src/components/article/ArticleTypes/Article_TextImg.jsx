import PropTypes from "prop-types";
import parse from "html-react-parser";

import Img from "./Img";

function Article_TextImg({ data }) {
  return (
    <div className="textImg">
      <Img imgData={data.img} size={200} style={{ float: data.img.float }} />

      <p>{parse(`${data.text}`)}</p>
    </div>
  );
}

export default Article_TextImg;

Article_TextImg.propTypes = {
  data: PropTypes.object,
};
