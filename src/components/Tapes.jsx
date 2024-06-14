import PropTypes from "prop-types";
import { randomNumber } from "./helpers";

import "../Styles/Tapes.css";

const tapes = {
  tapes1: 3,
  tapes2: 2,
  tapes3: 2,
  tapes4: 2,
  tapes5: 4,
  tapes6: 3,
  tapes7: 3,
  tapes8: 2,
  tapes9: 3,
};

function Tapes({ num }) {
  return (
    <div className={`tapes tapes${num}`}>
      <div style={{ backgroundImage: `url(/tapes/${randomNumber(1, 32)}.png)` }}></div>
      <div style={{ backgroundImage: `url(/tapes/${randomNumber(1, 32)}.png)` }}></div>
      {(tapes[`tapes${num}`] === 3 || tapes[`tapes${num}`] === 4) && (
        <div style={{ backgroundImage: `url(/tapes/${randomNumber(1, 32)}.png)` }}></div>
      )}
      {tapes[`tapes${num}`] === 4 && (
        <div style={{ backgroundImage: `url(/tapes/${randomNumber(1, 32)}.png)` }}></div>
      )}
    </div>
  );
}

Tapes.propTypes = {
  num: PropTypes.number,
};

export default Tapes;
