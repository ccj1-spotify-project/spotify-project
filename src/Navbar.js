import React, { useRef } from "react";
import { Link } from "react-router-dom";

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
        Title
      </h1>
      <Link to="/" id="back_home" ref={backHome}></Link>
    </>
  );
}
