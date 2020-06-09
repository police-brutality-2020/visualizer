import React from 'react';
import SearchResult from './search-result';

import './search-results.css';

function SearchResults() {
  // TODO: Use real search results; this is here to force scrolling behavior
  const results = [...Array(100).keys()].map((key) => (
    <SearchResult
      key={key}
      title="Police shoot tear gas canister at man from close range, striking him in the chest"
      location="Calgary, AB"
      date="June 6th, 2020"
    />
  ));

  return <div className="search-results">{results}</div>;
}

export default SearchResults;
