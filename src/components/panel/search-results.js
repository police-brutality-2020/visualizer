import React from 'react';
import SearchResult from './search-result';

import './search-results.css';

function SearchResults() {
  return (
    <div className="search-results">
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  );
}

export default SearchResults;
