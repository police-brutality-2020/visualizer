import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './search-result';

import './search-results.css';

function SearchResults({ data, onResultClick }) {
  const results = data.map((result) => (
    <SearchResult
      key={result.id}
      title={result.title}
      city={result.city}
      state={result.state}
      date={result.date}
      onClick={onResultClick}
    />
  ));

  return <div className="search-results">{results}</div>;
}

SearchResults.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onResultClick: PropTypes.func.isRequired,
};

export default SearchResults;
