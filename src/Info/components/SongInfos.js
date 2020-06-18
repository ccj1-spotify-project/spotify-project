import React from "react";
import { useSelector } from "react-redux";

import Badge from "../components/Badge";

export default function () {
  const name = useSelector((state) => state.targetSongObj.name);
  const artist = useSelector((state) => state.targetSongObj.artist);
  const releasedDate = useSelector((state) => state.targetSongObj.releasedDate);
  const genre = useSelector((state) => state.targetSongObj.genre);

  return (
    <div className="info">
      <Badge script={name} />
      <div className="info">
        <p className="artist">Artist</p>
        <p className="released_date">Released</p>
        <p className="genre">Genre</p>
      </div>
      <div className="info">
        <p className="artist">{artist}</p>
        <p className="released_date">{releasedDate}</p>
        <p className="genre">{genre}</p>
      </div>
    </div>
  );
}
