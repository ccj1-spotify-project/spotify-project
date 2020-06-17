import React from "react";
import PlayWidget from "react-spotify-widgets";

export default function SongInfo() {
  return (
    <div className="information">
      <PlayWidget
        width={300}
        height={380}
        uri={"spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"}
        lightTheme={true}
        viewCoverArt={true}
      />
      {/* <SongInfos /> */}
    </div>
  );
}
