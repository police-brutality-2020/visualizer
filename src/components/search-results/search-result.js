import React from 'react';
import PropTypes from 'prop-types';

import './search-result.css';

function SearchResult({ title, city, state, date, onClick }) {
  return (
    <div
      className="search-result"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <h4>{title}</h4>
      <p>
        {city}, {state} &bull; {date}
      </p>
    </div>
  );
}

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchResult;
