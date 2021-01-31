import React from "react";
import Header from "./Header";
import "./Body.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataLayerValue } from "../data/DataLayer";
import SongRow from "./SongRow";
import Artists from "./Artists";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:${discover_weekly.id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  const playSong = (id) => {
    console.log(id);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      {discover_weekly ? (
        <>
          <div className="body__info">
            <img src={discover_weekly?.images[0].url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLIST</strong>

              <h2>{discover_weekly.name}</h2>

              <p>{discover_weekly?.description}</p>
            </div>
          </div>
          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon
                className="body__shuffle"
                onClick={discover_weekly ? playPlaylist : null}
              />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>
            {discover_weekly?.tracks.items.map((item) =>
              item.track ? (
                <SongRow
                  key={item.track.id}
                  playSong={playSong}
                  track={item.track}
                />
              ) : (
                <div key={Date() + Math.random()}></div>
              )
            )}
          </div>
        </>
      ) : (
        <Artists />
      )}
    </div>
  );
}

export default Body;
