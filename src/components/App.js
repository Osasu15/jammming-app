import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]); 
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults searchResults={searchResults} />
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
    </div>
  );
}

export default App;
