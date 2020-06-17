import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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
const clientId = "0b0433ec9c8a45c781e4960897a83658";
const clientSecret = "2745e4cb80ba447ea152ca4e664ff863";

// import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const { artistArray, albumArray } = await getInitialState(
      clientId,
      clientSecret
    );
    const action = { type: "getState", payload: { artistArray, albumArray } };
    dispatch(action);
  }, []);

  return (
    <Router>
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
