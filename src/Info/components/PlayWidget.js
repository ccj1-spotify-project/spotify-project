import React from "react";
import PlayWidget from "react-spotify-widgets";

const PlayWidget = (props) => {
  const uri = props.uri;

  return (
    <PlayWidget
      width={300}
      height={380}
      uri={uri}
      lightTheme={true}
      viewCoverArt={true}
    />
  );
};

export default PlayWidget;
