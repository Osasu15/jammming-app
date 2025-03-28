import React from "react";
import Tracklist from "./Tracklist";

function SearchResults({ searchResults }) {
  return (
    <div>
      <h2>Results</h2>
      <Tracklist tracks={searchResults} />
    </div>
  );
}

export default SearchResults;
