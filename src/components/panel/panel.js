import React from 'react';
import PropTypes from 'prop-types';
import ResultDetails from '../result-details/result-details';
import SearchResults from '../search-results/search-results';

import './panel.css';

function Panel({ isOpen }) {
  const [showDetails, setShowDetails] = React.useState(false);

  // TODO: Pass up an incident ID or some other relevant data to show details for
  const handleResultClick = () => setShowDetails(true);

  return (
    <div className={`panel ${isOpen ? 'open' : ''}`}>
      <div className="omnibox-spacer" />
      {showDetails ? (
        <ResultDetails />
      ) : (
        <SearchResults onResultClick={handleResultClick} />
      )}
    </div>
  );
}

Panel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Panel;
