import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from "./mainPage/pages/MainPage.js";
import ArtistInfo from "./Info/pages/ArtistInfo.js";
import SongInfo from "./Info/pages/SongInfo.js";

import "./App.css";

function App() {
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
