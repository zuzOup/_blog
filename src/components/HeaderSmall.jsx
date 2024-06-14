import PropTypes from "prop-types";

import "../Styles/HeaderSmall.css";

function HeaderSmall({ backToMain }) {
  return (
    <header>
      <div className="bannerSmall">
        <a href={backToMain ? "/" : "/clanky"}>☜ Zpátky</a> {/* ⬑⮬*/}
      </div>
      <div className="lace"></div>
    </header>
  );
}

HeaderSmall.propTypes = {
  backToMain: PropTypes.bool,
};

export default HeaderSmall;
