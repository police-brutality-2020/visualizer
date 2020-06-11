import React from 'react';
import Map from './components/map/map';
import Sidebar from './components/sidebar/sidebar';
import useIncidents from './hooks/getIncidents';

import './App.css';

function App() {
  const [mapValue, setMapValue] = React.useState('');

  const incidents = useIncidents();
  if (!incidents) return null;

  return (
    <div className="app">
      <Sidebar incidents={incidents} mapValue={mapValue} />
      <Map incidents={incidents} onCityClick={setMapValue} />
    </div>
  );
}

export default App;
