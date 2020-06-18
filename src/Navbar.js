import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Info/components/Carousel";

export default function () {
  const backHome = useRef(null);

  return (
    <>
      <h1
        id="title"
        onClick={() => {
          backHome.current.click();
        }}
      >
        Hooked
      </h1>
      <Link to="/" id="back_home" ref={backHome}></Link>
      <Carousel />
    </>
  );
}
