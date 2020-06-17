import React from "react";
import PlayWidget from "react-spotify-widgets";
import SongInfos from "../components/SongInfos";

export default function () {
  const uri = "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR";
  return (
    <div className="information">
      <PlayWidget uri={uri} />
      <SongInfos />
    </div>
  );
}
