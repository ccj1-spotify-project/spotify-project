import React from "react";

import { useSelector, useDispatch } from "react-redux";

import "./MainPage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const artistObjs = useSelector((state) => state.artistObjs);
  const songObjs = useSelector((state) => state.songObjs);

  return (
    <div className="main-page">
      <div className="artist_container">
        <h2>Popular Artist</h2>
        {artistObjs.map((obj, i) => (
          <img src={obj.photo} key={i} />
        ))}
      </div>
      <div className="song_container">
        <h2>Popular Song</h2>
        {songObjs.map((obj, i) => (
          <img src={obj.photo} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
