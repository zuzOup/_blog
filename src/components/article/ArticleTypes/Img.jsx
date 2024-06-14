import PropTypes from "prop-types";
import { useState } from "react";

import { src } from "../../articlehelpers";

function Img({ imgData, size, style }) {
  const [imgSrc, setImgSrc] = useState(src(imgData.url, size));

  const reload = () => {
    setImgSrc(src(imgData.url, size));
  };

  const className = style ? imgData.float : "";

  return (
    <img
      alt={imgData.alt}
      src={imgSrc}
      style={style}
      className={className}
      onError={reload}
    />
  );
}

export default Img;

Img.propTypes = {
  imgData: PropTypes.object,
  size: PropTypes.number,
  style: PropTypes.object,
};
