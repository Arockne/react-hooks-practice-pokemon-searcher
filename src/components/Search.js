import React from "react";
import SearchInput from './SearchInput'

function Search({ onSearch }) {
  return (
    <div className="ui search">
      <SearchInput onSearch={onSearch}/>
    </div>
  );
}

export default Search;
