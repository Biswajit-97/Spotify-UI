import React from "react";
import { useDataLayerValue } from "../data/DataLayer";
import "./SidebarOption.css";
function SidebarOption({ title, Icon, id }) {
  const [{ spotify, discover_weekly }, dispatch] = useDataLayerValue();
  const handleClick = () => {
    if (id) {
      spotify.getPlaylist(id).then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  };
  const goHome = () => {
    if (discover_weekly) {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: false,
      });
    }
  };
  return (
    <div className="sidebarOption" onClick={handleClick}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4 onClick={goHome}>{title}</h4> : <p> {title}</p>}
    </div>
  );
}

export default SidebarOption;
