/* global google */
import React from 'react';
import { HeatmapLayer } from '@react-google-maps/api';

const options = {
  dissipating: false,
  radius: 2,
};

function HeatLayer() {
  return (
    <HeatmapLayer
      data={[new google.maps.LatLng(37.782, -122.447)]}
      options={options}
    />
  );
}

export default HeatLayer;
