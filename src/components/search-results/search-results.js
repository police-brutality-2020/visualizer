import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './search-result';

import './search-results.css';

function SearchResults({ results, onResultClick }) {
  const elements = results.map((result) => (
    <SearchResult
      id={result.id}
      key={result.id}
      title={result.title}
      city={result.city}
      state={result.state}
      date={result.date}
      onResultClick={onResultClick}
    />
  ));

  return <div className="search-results">{elements}</div>;
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  onResultClick: PropTypes.func.isRequired,
};

export default SearchResults;
