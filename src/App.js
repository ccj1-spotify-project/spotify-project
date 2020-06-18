import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from "./mainPage/pages/MainPage.js";
import ArtistInfo from "./Info/pages/ArtistInfo.js";
import SongInfo from "./Info/pages/SongInfo.js";
import getInitialState from "./fetchFunctions";
import Navbar from "./Navbar";
import "./App.css";

const clientId = "0b0433ec9c8a45c781e4960897a83658";
const clientSecret = "2745e4cb80ba447ea152ca4e664ff863";

function App() {
  const playlistId = useSelector((state) => state.playList);
  const dispatch = useDispatch();
  useEffect(() => {
    getInitialState(clientId, clientSecret, playlistId).then(
      ({ artistArray, albumArray, playListImages }) => {
        const action = {
          type: "GET_STATE",
          payload: { artistArray, albumArray, playListImages },
        };
        dispatch(action);
      }
    );
  });

  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/artist/:id" exact>
            <ArtistInfo />
          </Route>
          <Route path="/song/:id" exact>
            <SongInfo />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
