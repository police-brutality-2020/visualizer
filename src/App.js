import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import HeatMap from './components/heat-map/HeatMap';

import './App.css';

function App() {
  return (
    <LoadScript
      libraries={['visualization']}
      googleMapsApiKey="AIzaSyDGPAOkljsjapYWRKo89y6McxkZ3JzwZKI"
    >
      <HeatMap />
    </LoadScript>
  );
}

export default App;
