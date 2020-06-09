import React from 'react';
import Map from './components/map/map';
import Panel from './components/panel/panel';
import useLocations from './hooks/getLocations';

import './App.css';

function App() {
  const data = useLocations();
  if (!data) return null;

  return (
    <div className="app">
      <Panel />
      <Map data={data} />
    </div>
  );
}

export default App;
