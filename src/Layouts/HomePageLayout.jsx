import PropTypes from "prop-types";

import Header from "../components/HomePage/Header";
import Text from "../components/HomePage/Text";
import MainContent from "../components/HomePage/MainContent";
import Footer from "../components/Footer";
import ArchiveLink from "../components/HomePage/ArchiveLink";

function HomePageLayout({ loaded, articleDates, allData }) {
  return (
    <>
      <Header />
      <main>
        <Text />
        {loaded && <MainContent articleDates={articleDates} allData={allData} />}
        <ArchiveLink />
      </main>
      <Footer />
    </>
  );
}

HomePageLayout.propTypes = {
  loaded: PropTypes.bool,
  articleDates: PropTypes.array,
  allData: PropTypes.object,
};

export default HomePageLayout;
