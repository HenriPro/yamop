import React from 'react';

export default function Search(props) {
  return (
    <h3>
      <span>
        Search
        <input
          type="text"
          onChange={(e) => props.handleSearchInput(e.target.value)}
          value={props.searchValue}
        />
        <select
          onChange={(e) => props.handleSearchType(e.target.value)}
          value={props.searchTypeValue}>
          <option value="searchAll">Search All</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="genre">Genre</option>
        </select>
      </span>
    </h3>
  );
}
