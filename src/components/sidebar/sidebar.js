import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import Omnibox from '../omnibox/omnibox';
import Panel from '../panel/panel';

const fuse = new Fuse([], {
  includeScore: true,
  isCaseSensitive: false,
  threshold: 0.3,
  keys: ['city', 'state', 'title'],
});

function Sidebar({ incidents, mapValue, setMapValue }) {
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    setSearch(mapValue);
  }, [mapValue]);

  const handleClear = () => {
    setSearch('');
    setMapValue('');
  };
  const isOpen = !!search;

  // Inform the Fuse instance of the new `incidents` array
  fuse.setCollection(incidents);

  // Perform a fuzzy search and sort the results by date
  const results = fuse
    .search(search)
    .map((result) => result.item)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Omnibox
        key={`omnibox-${search}`}
        defaultInput={search}
        onClear={handleClear}
        onSearch={setSearch}
      />
      <Panel
        key={`panel-${search}`}
        search={search}
        results={results}
        isOpen={isOpen}
      />
    </>
  );
}

Sidebar.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.object).isRequired,
  mapValue: PropTypes.string.isRequired,
  setMapValue: PropTypes.func.isRequired,
};

export default Sidebar;
