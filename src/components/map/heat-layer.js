/* global google */
import React from 'react';
import { HeatmapLayer } from '@react-google-maps/api';
import useLocation from '../../hooks/getLocations';

const options = {
  dissipating: false,
  radius: 2,
};

function HeatLayer() {
  const data = useLocation();
  if (!data) return null;
  const mappedCoordinates = data.map(
    (location) =>
      new google.maps.LatLng(location.geocoding.lat, location.geocoding.long),
  );

  return <HeatmapLayer data={mappedCoordinates} options={options} />;
}

export default HeatLayer;
