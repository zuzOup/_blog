import PropTypes from "prop-types";

import HeaderSmall from "../components/HeaderSmall";
import Footer from "../components/Footer";
import ArchiveContent from "../components/archive/ArchiveContent";

function ArchiveLayout({ loaded, articleDates, allData }) {
  return (
    <>
      <HeaderSmall backToMain={true} />
      <main className="mainSmall">
        {loaded && <ArchiveContent articleDates={articleDates} allData={allData} />}
      </main>
      <Footer />
    </>
  );
}

ArchiveLayout.propTypes = {
  loaded: PropTypes.bool,
  articleDates: PropTypes.array,
  allData: PropTypes.object,
};

export default ArchiveLayout;
