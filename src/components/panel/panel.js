import React from 'react';
import SearchBox from './search-box';
import SearchResults from './search-results';

import './panel.css';

function Panel() {
  return (
    <div className="panel">
      <SearchBox />
      <SearchResults />
    </div>
  );
}

export default Panel;
