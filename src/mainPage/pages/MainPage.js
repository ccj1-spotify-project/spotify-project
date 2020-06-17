import React, { useState } from "react";

import "./MainPage.css";

const MainPage = () => {
  const [artistImgs, setArtistImage] = useState([
    "https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FTechinsight%252FTechinsight_20190902_632972_d5a4_1.jpg,zoom=1200,quality=70,type=jpg",
    "https://images-na.ssl-images-amazon.com/images/I/513CJOJyH8L._AC_.jpg",
  ]);

  const [songImgs, setSongImage] = useState([
    "https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FTechinsight%252FTechinsight_20190902_632972_d5a4_1.jpg,zoom=1200,quality=70,type=jpg",
    "https://images-na.ssl-images-amazon.com/images/I/513CJOJyH8L._AC_.jpg",
  ]);
  return (
    <div className="main-page">
      <div className="artist_container">
        <h2>Popular Artist</h2>
        {artistImgs.map((img, i) => (
          <img src={img} key={i} />
        ))}
      </div>
      <div className="song_container">
        <h2>Popular Song</h2>
        {songImgs.map((img, i) => (
          <img src={img} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
