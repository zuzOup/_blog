import PropTypes from "prop-types";

import Polaroid from "../Polaroid";

import "../../Styles/Grid.css";

function MainContent({ articleDates, allData }) {
  return (
    <div className="grid">
      {articleDates.slice(0, 4).map((x) => {
        return <Polaroid key={x} header={allData[x].header} id={x} />;
      })}
    </div>
  );
}

MainContent.propTypes = {
  articleDates: PropTypes.array,
  allData: PropTypes.object,
};

export default MainContent;
