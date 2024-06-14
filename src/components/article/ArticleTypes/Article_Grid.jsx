import PropTypes from "prop-types";

import Img from "./Img";
import { useEffect, useState } from "react";

function Article_Grid({ data }) {
  const images = [...data.divs];
  const [width, setWidth] = useState("150px");

  if (images[0] === null) {
    images.shift();
  }

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth > 1200) {
        setWidth("150px");
      } else if (window.innerWidth > 1000) {
        setWidth("138.725px");
      } else if (window.innerWidth > 800) {
        const width = window.innerWidth / 6.9765971;
        setWidth(`${width}px`);
      } else {
        const width = window.innerWidth / 6.685497;
        setWidth(`${width}px`);
      }
    }

    handleSize();

    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div
      className="grid-article"
      style={{
        gridTemplateRows: `repeat(${data.rows}, ${width})`,
      }}
    >
      {images.map((img, i) => {
        return (
          <div
            key={i}
            style={{
              gridColumnEnd: img.columnEnd,
              gridColumnStart: img.columnStart,
              gridRowEnd: img.rowEnd,
              gridRowStart: img.rowStart,
            }}
          >
            <Img imgData={img} size={(img.columnEnd - img.columnStart) * 200} />
          </div>
        );
      })}
    </div>
  );
}

export default Article_Grid;
Article_Grid.propTypes = {
  data: PropTypes.object,
};
