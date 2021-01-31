import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Components/Login";
import Player from "./Components/Player";
import "./App.css";
import { getTokenFromURL } from "./Config/spotify";
import { useDataLayerValue } from "./data/DataLayer.js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      //setToken(_token);
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token); // giving access token to Spotify API
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, [token, dispatch]);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
