import React from 'react';
import PropTypes from 'prop-types';

import './search-result.css';

function SearchResult({ title, location, date }) {
  return (
    <div className="search-result">
      <h4>{title}</h4>
      <p>
        {location} &bull; {date}
      </p>
    </div>
  );
}

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default SearchResult;
