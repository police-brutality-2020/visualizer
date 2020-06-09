import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './search-result';

import './search-results.css';

function SearchResults({ onResultClick }) {
  // TODO: Use real search results; this is here to force scrolling behavior
  const results = [...Array(100).keys()].map((key) => (
    <SearchResult
      key={key}
      title="Police shoot tear gas canister at man from close range, striking him in the chest"
      location="Calgary, AB"
      date="June 6th, 2020"
      onClick={onResultClick}
    />
  ));

  return <div className="search-results">{results}</div>;
}

SearchResults.propTypes = {
  onResultClick: PropTypes.func.isRequired,
};

export default SearchResults;
