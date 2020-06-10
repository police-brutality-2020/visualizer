import React from 'react';
import PropTypes from 'prop-types';
import ResultDetails from '../result-details/result-details';
import SearchResults from '../search-results/search-results';

import './panel.css';

function Panel({ data, isOpen }) {
  const [openResult, setOpenResult] = React.useState(null);

  return (
    <div className={`panel ${isOpen ? 'open' : ''}`}>
      <div className="omnibox-spacer" />
      {openResult ? (
        <ResultDetails id={openResult} />
      ) : (
        <SearchResults data={data} onResultClick={setOpenResult} />
      )}
    </div>
  );
}

Panel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Panel;
