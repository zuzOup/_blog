import PropTypes from "prop-types";
import { useEffect } from "react";

import Polaroid from "../Polaroid";

import "../../Styles/Grid.css";
import "../../Styles/Archive/ArchiveContent.css";

function ArchiveContent({ articleDates, allData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(2);
  }, []);

  const extra = articleDates.length % 4;

  let longArr = [...articleDates];
  let shortArr = [];

  if (extra !== 0) {
    shortArr = articleDates.slice(-extra);

    for (let i = 0; i < extra; i++) {
      longArr.pop();
    }
  }

  return (
    <div className="archive-main">
      <div className="grid archive-grid">
        {longArr.map((x) => {
          return <Polaroid key={x} header={allData[x].header} id={x} />;
        })}
      </div>
      <div className={`grid  archive-grid archive-grid${extra}`}>
        {shortArr.map((x) => {
          return <Polaroid key={x} header={allData[x].header} id={x} />;
        })}
      </div>
    </div>
  );
}

ArchiveContent.propTypes = {
  articleDates: PropTypes.array,
  allData: PropTypes.object,
};

export default ArchiveContent;
