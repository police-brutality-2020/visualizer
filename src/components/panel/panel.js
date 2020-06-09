import React from 'react';
import SearchBox from './search-box';
import SearchResults from './search-results';

import './panel.css';

function Panel() {
  const [isOpen, setOpen] = React.useState(false);

  const handleSearch = () => setOpen(true);

  return (
    <div className={`panel ${isOpen ? 'open' : ''}`}>
      <SearchBox onSearch={handleSearch} />
      <SearchResults />
    </div>
  );
}

export default Panel;
