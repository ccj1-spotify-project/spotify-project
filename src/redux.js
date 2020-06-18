// import React from "react";
import { createStore } from "redux";
import initialState from "./initialState";

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
