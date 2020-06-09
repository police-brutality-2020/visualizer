import React from 'react';
import Map from './components/map/map';
import Omnibox from './components/omnibox/omnibox';
import Panel from './components/panel/panel';
import useLocations from './hooks/getLocations';

import './App.css';

function App() {
  const [isOpen, setOpen] = React.useState(false);
  const handleClear = () => setOpen(false);
  const handleSearch = () => setOpen(true);

  const data = useLocations();
  if (!data) return null;

  return (
    <div className="app">
      <Omnibox onClear={handleClear} onSearch={handleSearch} />
      <Panel isOpen={isOpen} />
      <Map data={data} />
    </div>
  );
}

export default App;
