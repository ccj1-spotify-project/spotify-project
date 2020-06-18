import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Info/components/Carousel";
import { useDispatch } from "react-redux";

export default function () {
  const backHome = useRef(null);
  const dispatch = useDispatch();

  return (
    <>
      <h1
        id="title"
        onClick={() => {
          backHome.current.click();
          dispatch({
            type: "CHANGE_PLAYLIST",
            playList: "37i9dQZEVXbMDoHDwVN2tF",
          });
        }}
      >
        Title
      </h1>
      <Link to="/" id="back_home" ref={backHome}></Link>
      <Carousel />
    </>
  );
}
