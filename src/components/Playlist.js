import React from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlistName, playlistTracks }) {
  return (
    <div>
      <input type="text" value={playlistName} />
      <Tracklist tracks={playlistTracks} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
