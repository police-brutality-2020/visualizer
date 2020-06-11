import React from 'react';
import Map from './components/map/map';
import Sidebar from './components/sidebar/sidebar';
import useLocations from './hooks/getLocations';

import './App.css';

function App() {
  const [mapValue, setMapValue] = React.useState('');
  const data = useLocations();
  if (!data) return null;

  return (
    <div className="app">
      <Sidebar data={data} mapValue={mapValue} />
      <Map data={data} onCityClick={setMapValue} />
    </div>
  );
}

export default App;
