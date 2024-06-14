import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getSortedDateArray } from "./components/helpers";

import HomePageLayout from "./Layouts/HomePageLayout";
import ArchiveLayout from "./Layouts/ArchiveLayout";
import ArticleLayout from "./Layouts/ArticleLayout";
import NotFound from "./components/notFound/NotFound";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [allData, setAllData] = useState({});
  const [articleDates, setArticleDates] = useState([]);

  useEffect(() => {
    fetch("https://na-rok-torontakama-default-rtdb.firebaseio.com/published.json")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
        setLoaded(true);
        setArticleDates(getSortedDateArray(data));
      })
      .catch((e) => console.log(e));
  }, []); //eslint-disable-line

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePageLayout
              loaded={loaded}
              articleDates={articleDates}
              allData={allData}
            />
          }
        />
        <Route
          path="/clanky"
          element={
            <ArchiveLayout
              loaded={loaded}
              articleDates={articleDates}
              allData={allData}
            />
          }
        />
        <Route
          path="/clanky/:articleId"
          element={
            <ArticleLayout
              loaded={loaded}
              articleDates={articleDates}
              allData={allData}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
