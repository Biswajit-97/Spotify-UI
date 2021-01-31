import React, { useEffect } from "react";
import { useDataLayerValue } from "../data/DataLayer";
import "./Artists.css";
function Artists() {
  const [{ spotify, top_artists }, dispatch] = useDataLayerValue();
  useEffect(() => {
    spotify.getMyTopArtists().then((response) => {
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      });
    });
  }, [spotify, dispatch]);
  return (
    <>
      <h2>Your Top Artists</h2>
      <div className="artist__container">
        {top_artists?.items?.map((item) => (
          <div key={item.id} className="artist__info">
            <img
              className="artist__info__image"
              src={item.images[0].url}
              alt={item.name}
            />
            <div className="artist__infoText">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Artists;
