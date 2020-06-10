import React from 'react';
import PropTypes from 'prop-types';
import Omnibox from '../omnibox/omnibox';
import Panel from '../panel/panel';

function Sidebar({ data, mapValue }) {
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    setSearch(mapValue);
  }, [mapValue]);

  const handleClear = () => setSearch('');
  const isOpen = !!search;
  let results = data.filter((item) => item.city === search);
  if (results.length === 0) {
    results = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <>
      <Omnibox
        key={`omnibox-${search}`}
        defaultInput={search}
        onClear={handleClear}
        onSearch={setSearch}
      />
      <Panel key={`panel-${search}`} data={results} isOpen={isOpen} />
    </>
  );
}

Sidebar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  mapValue: PropTypes.string.isRequired,
};

export default Sidebar;
