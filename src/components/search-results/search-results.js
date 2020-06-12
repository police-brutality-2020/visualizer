import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './search-result';

import './search-results.css';

function SearchResults({ search, results, onResultClick }) {
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

  return elements.length === 0 ? (
    <div className="search-results empty">
      <h4>No results for &quot;{search}&quot;</h4>
      <p>
        Make sure your search is spelled correctly. Try searching for a city,
        state, or police department.
      </p>
      <p className="call-to-action">Think you&apos;ve found a bug?</p>
      <a
        href="https://github.com/police-brutality-2020/visualizer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Let us know on GitHub.
      </a>
    </div>
  ) : (
    <div className="search-results">{elements}</div>
  );
}

SearchResults.propTypes = {
  search: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  onResultClick: PropTypes.func.isRequired,
};

export default SearchResults;
