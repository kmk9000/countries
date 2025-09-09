import React from "react";
const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      search for country: <input value={search} onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
