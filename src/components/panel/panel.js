import React from 'react';
import PropTypes from 'prop-types';
import ResultDetails from '../result-details/result-details';
import SearchResults from '../search-results/search-results';

import './panel.css';

function Panel({ data, isOpen }) {
  const [showDetails, setShowDetails] = React.useState(false);

  // TODO: Pass up an incident ID or some other relevant data to show details for
  const handleResultClick = () => setShowDetails(true);

  return (
    <div className={`panel ${isOpen ? 'open' : ''}`}>
      <div className="omnibox-spacer" />
      {showDetails ? (
        <ResultDetails />
      ) : (
        <SearchResults data={data} onResultClick={handleResultClick} />
      )}
    </div>
  );
}

Panel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Panel;
