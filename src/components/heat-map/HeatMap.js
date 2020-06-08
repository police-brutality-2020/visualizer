/* global google */
import React from 'react';
import { GoogleMap, HeatmapLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const mapOptions = {
  center: {
    lat: 39,
    lng: -98,
  },
  zoom: 5,
  mapTypeControl: false,
  streetViewControl: false,
};

const heatmapOptions = {
  dissipating: false,
  radius: 2,
};

function HeatMap() {
  return (
    <GoogleMap mapContainerStyle={containerStyle} options={mapOptions}>
      <HeatmapLayer
        data={[new google.maps.LatLng(37.782, -122.447)]}
        options={heatmapOptions}
      />
    </GoogleMap>
  );
}

export default HeatMap;
