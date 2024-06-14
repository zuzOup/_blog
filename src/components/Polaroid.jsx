import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { randomNumber, randomTranslate, randomRotate } from "./helpers";
import { day, src, date, title } from "./articlehelpers";

import Tapes from "./Tapes";
import "../Styles/Polaroid.css";

function Polaroid({ header, id }) {
  const alt = header.preview.alt;

  const num = randomNumber(1, 9);

  const style = {
    transform: `translateY(${randomTranslate(
      -1,
      1,
      window.innerWidth
    )}) translateX(${randomTranslate(-1, 1, window.innerWidth)}) rotate(${randomRotate(
      -2,
      2
    )}deg)`,
  };

  return (
    <div style={style}>
      <Link className="frame" to={`../clanky/${id}`}>
        <div className="picture">
          <img src={src(header.preview.url, 420)} alt={alt} />
        </div>
        <h2>{title(header.title)}</h2>
        <h3>{date(header.date)}</h3>
        <h4>{day(header.date)}</h4>
      </Link>
      <Tapes num={num} />
    </div>
  );
}

export default Polaroid;

Polaroid.propTypes = {
  header: PropTypes.object,
  id: PropTypes.string,
};
