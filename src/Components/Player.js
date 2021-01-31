import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
function Player({ spotify }) {
  return (
    <>
      <div className="player-container">
        <div className="sidebar__body">
          <Sidebar />
        </div>
        <div className="player__body">
          <Body spotify={spotify} />
        </div>
      </div>
      <div className="footer__body">
        <Footer spotify={spotify} />
      </div>
    </>
  );
}

export default Player;
