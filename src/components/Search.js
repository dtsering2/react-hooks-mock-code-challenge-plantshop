import React from "react";

function Search({searchQuery, handleSearchQuery}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {searchQuery}
        onChange={handleSearchQuery}
      />
    </div>
  );
}

export default Search;
