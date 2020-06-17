import React from "react";
import PlayWidget from "react-spotify-widgets";

export default function () {
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
}

//<PlayWidget uri={XXX}>
//XXXに取得したuriを入れていただくとPlayWidgetが表示できます
//https://github.com/Ben-Wu/react-spotify-widgets#readme
