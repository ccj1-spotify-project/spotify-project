import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./MainPage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const artistObjs = useSelector((state) => state.artistObjs);
  const songObjs = useSelector((state) => state.songObjs);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <div className="main-page">
      <div>
        <h2>Popular Artist</h2>
        <Carousel responsive={responsive} draggable={true} swipeable={true}>
          {artistObjs.map((obj, i) => (
            <Link
              to={`/artist/${i}`}
              onClick={() => {
                dispatch({
                  type: "SET_TARGET_ARTIST",
                  targetArtistObj: artistObjs[i],
                });
              }}
            >
              <div className="container">
                <img src={obj.photo} key={i} />
                <div className="overlay">
                  <div class="text">{obj.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <div>
        <h2>Popular Song</h2>
        <Carousel responsive={responsive} swipeable={true}>
          {songObjs.map((obj, i) => (
            <Link
              to={`/song/${i}`}
              onClick={() => {
                dispatch({
                  type: "SET_TARGET_SONG",
                  targetSongObj: songObjs[i],
                });
              }}
            >
              <div className="container">
                <img src={obj.photo} key={i} />
                <div className="overlay">
                  <div class="text">{obj.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MainPage;
