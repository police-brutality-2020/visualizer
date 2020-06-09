import React from 'react';
import Map from './components/map/map';
import Omnibox from './components/omnibox/omnibox';
import Panel from './components/panel/panel';

import './App.css';

function App() {
  const [isOpen, setOpen] = React.useState(false);

  const handleClear = () => setOpen(false);
  const handleSearch = () => setOpen(true);

  return (
    <div className="app">
      <Omnibox onClear={handleClear} onSearch={handleSearch} />
      <Panel isOpen={isOpen} />
      <Map />
    </div>
  );
}

export default App;
