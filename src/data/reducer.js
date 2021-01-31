export const intialState = {
  user: null,
  playlists: [],
  playing: false,
  discover_weekly: null,
  top_artists: [],
  token: null,
  item: null,
  spotify: null,
};

const reducer = (state, action) => {
  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER": //type
      return {
        ...state,
        user: action.user, //payload : user
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    default:
      return state;
  }
};

export default reducer;
