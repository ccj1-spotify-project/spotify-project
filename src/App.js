import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from "./mainPage/pages/MainPage.js";
import ArtistInfo from "./Info/pages/ArtistInfo.js";
import SongInfo from "./Info/pages/SongInfo.js";
import getToken from "./fetchFunctions/getToken";
import { getTop50 } from "./fetchFunctions/getTopArtistAlbum";
import { getAlbums, getArtists } from "./fetchFunctions/index";

const clientId = "0b0433ec9c8a45c781e4960897a83658";
const clientSecret = "2745e4cb80ba447ea152ca4e664ff863";

// import "./App.css";

function App() {
  useEffect(() => {
    getToken(clientId, clientSecret)
      .then((res) => {
        const { access_token } = res;
        return access_token;
      })
      .then(async (token) => {
        const { artistIDs, albumIDs } = await getTop50(token);
        return { token, artistIDs, albumIDs };
      })
      .then(async ({ token, artistIDs, albumIDs }) => {
        console.log(
          "token",
          token,
          "artistIDs",
          artistIDs,
          "albumIDs",
          albumIDs
        );
        const artistArray = await getArtists(token, artistIDs);
        const albumArray = await getAlbums(token, albumIDs);
        console.log(artistArray, albumArray);
        // return { artistArray, albumArray };
      });
    // .then(({ artistArray, albumArray }) => {
    //   console.log(artistArray, albumArray);
    // });
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
