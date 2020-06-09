import React from 'react';
import Map from './components/map/map';
import Panel from './components/panel/panel';

import './App.css';

function App() {
  return (
    <div className="app">
      <Panel />
      <Map />
    </div>
  );
}

export default App;
