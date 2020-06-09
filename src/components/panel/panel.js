import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './search-results';

import './panel.css';

function Panel({ isOpen }) {
  return (
    <div className={`panel ${isOpen ? 'open' : ''}`}>
      <div className="omnibox-spacer" />
      <SearchResults />
    </div>
  );
}

Panel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Panel;
