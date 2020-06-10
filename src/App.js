import React from 'react';
import Map from './components/map/map';
import Omnibox from './components/omnibox/omnibox';
import Panel from './components/panel/panel';
import useLocations from './hooks/getLocations';

import './App.css';

function App() {
  const [search, setSearch] = React.useState('');
  const handleClear = () => setSearch('');

  const data = useLocations();
  if (!data) return null;

  const isOpen = !!search;
  const results = data.filter((item) => item.city === search);

  return (
    <div className="app">
      <Omnibox
        key={`omnibox-${search}`}
        defaultInput={search}
        onClear={handleClear}
        onSearch={setSearch}
      />
      <Panel key={`panel-${search}`} data={results} isOpen={isOpen} />
      <Map data={data} onCityClick={setSearch} />
    </div>
  );
}

export default App;
