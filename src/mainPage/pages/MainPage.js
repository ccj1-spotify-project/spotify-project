import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import "./MainPage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const artistObjs = useSelector((state) => state.artistObjs);
  const songObjs = useSelector((state) => state.songObjs);

  return (
    <div className="main-page">
      <h2>Popular Artist</h2>
      <div className="artist_container">
        {artistObjs.map((obj, i) => (
          <Link to={`/artist/${i}`}>
            <div className="container">
              <img
                src={obj.photo}
                key={i}
                onClick={() => {
                  dispatch({
                    type: "SET_TARGET_ARTIST",
                    targetArtistObj: artistObjs[i],
                  });
                }}
              />
              <div className="overlay">
                <div class="text">{obj.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <h2>Popular Song</h2>
      <div className="song_container slides">
        {songObjs.map((obj, i) => (
          <Link to={`/song/${i}`}>
            <div className="container">
              <img
                src={obj.photo}
                key={i}
                onClick={() => {
                  dispatch({
                    type: "SET_TARGET_SONG",
                    targetSongObj: songObjs[i],
                  });
                }}
              />
              <div className="overlay">
                <div class="text">{obj.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
