import React from "react";
import { useSelector } from "react-redux";

import PlayWidget from "react-spotify-widgets";
import SongInfos from "../components/SongInfos";
import Image from "../components/Image";

import "./SongInfo.css";

export default function () {
  const uri = useSelector((state) => state.targetSongObj.uri);
  const photo = useSelector((state) => state.targetSongObj.photo);

  return (
    <div className="information">
      <PlayWidget uri={uri} />
      <SongInfos />
      <img src={photo} className="photo" />
      {/* <Image src={photo} className="photo" /> */}
    </div>
  );
}
