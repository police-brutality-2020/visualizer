import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import HeatLayer from './heat-layer';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const options = {
  center: {
    lat: 38,
    lng: -98,
  },
  zoom: 5,
  mapTypeControl: false,
  streetViewControl: false,
};

function Map() {
  function handleMapClick(e) {
    console.log('coordinates', e.latLng.lat(), e.latLng.lng());
  }

  return (
    <LoadScript
      libraries={['visualization']}
      googleMapsApiKey="AIzaSyDGPAOkljsjapYWRKo89y6McxkZ3JzwZKI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        onClick={handleMapClick}
      >
        <HeatLayer />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
