import React from "react";

export default function (props) {
  const artist = "Ariana";
  return (
    <div className="song_infos">
      <div className="info">
        <p className="artist_name">Artist</p>
        <p className="released_date">Released</p>
        <p className="genre">Genre</p>
        <p className="length">Length</p>
      </div>
      <div className="info">
        <p className="artist_name">Artist</p>
        <p className="released_date">Released</p>
        <p className="genre">Genre</p>
        <p className="length">Length</p>
      </div>
    </div>
  );
}
