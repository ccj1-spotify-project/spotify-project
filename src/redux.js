import React from "react";
import { createStore } from "redux";

const initialState = {
  playlistId: "37i9dQZEVXbMDoHDwVN2tF",
  artistObjs: [
    {
      name: "xx",
      uri: "spotify:artist:0W2x7650Lt2CEIIcLHXmsE",
      description: "xx",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/513CJOJyH8L._AC_.jpg",
    },
    {
      name: "xx",
      uri: "spotify:artist:0W2x7650Lt2CEIIcLHXmsE",
      description: "xx",
      photo:
        "https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FTechinsight%252FTechinsight_20190902_632972_d5a4_1.jpg,zoom=1200,quality=70,type=jpg",
    },
  ],
  songObjs: [
    {
      name: "xx",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/513CJOJyH8L._AC_.jpg",
      artist: "xx",
      releasedDate: "xx",
      genre: "xx",
      uri: "spotify:artist:0W2x7650Lt2CEIIcLHXmsE",
    },
    {
      name: "xx",
      photo:
        "https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FTechinsight%252FTechinsight_20190902_632972_d5a4_1.jpg,zoom=1200,quality=70,type=jpg",
      artist: "xx",
      releasedDate: "xx",
      genre: "xx",
      uri: "spotify:artist:0W2x7650Lt2CEIIcLHXmsE",
    },
  ],
  targetArtistObj: {
    name: "xx",
    uri: "spotify:artist:0W2x7650Lt2CEIIcLHXmsE",
    description: "xx",
    photo:
      "https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FTechinsight%252FTechinsight_20190902_632972_d5a4_1.jpg,zoom=1200,quality=70,type=jpg",
  },
  targetSongObj: {
    name: "xx",
    photo:
      "https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FTechinsight%252FTechinsight_20190902_632972_d5a4_1.jpg,zoom=1200,quality=70,type=jpg",
    artist: "xx",
    releasedDate: "xx",
    genre: "xx",
    uri: "spotify:artist:0W2x7650Lt2CEIIcLHXmsE",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TARGET_ARTIST":
      return {
        ...state,
        targetArtistObj: action.targetArtistObj,
      };
    case "SET_TARGET_SONG":
      return {
        ...state,
        targetSongObj: action.targetSongObj,
      };

    case "GET_STATE":
      return {
        ...state,
        artistObjs: action.payload.artistArray,
        songObjs: action.payload.albumArray,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export { store };
