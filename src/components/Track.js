import React from "react";

function Track({ track }) {
  return (
    <div>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default Track;
