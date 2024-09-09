import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getSortedDateArray } from "./components/helpers";

import HomePageLayout from "./Layouts/HomePageLayout";
import ArchiveLayout from "./Layouts/ArchiveLayout";
import ArticleLayout from "./Layouts/ArticleLayout";
import NotFound from "./components/notFound/NotFound";

const weatherCards = [
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908363/0_lzpanv.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908364/1_v680fw.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908366/2_bqrqdl.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908367/3_ztyepm.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908368/4_ahv01e.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908369/5_wbix9e.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908362/6_mtmsk9.png",
];

const loadImg = (arr) => {
  arr.forEach((url) => {
    let img = new Image();
    img.src = url;
  });
};

function App() {
  const [loaded, setLoaded] = useState(false);
  const [allData, setAllData] = useState({});
  const [articleDates, setArticleDates] = useState([]);

  useEffect(() => {
    loadImg(weatherCards);
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
