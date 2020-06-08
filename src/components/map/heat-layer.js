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
  const filteredLocations = data.filter((el) => {
    return el.coordinates !== undefined;
  });
  const mappedCoordinates = filteredLocations.map(
    (location) =>
      new google.maps.LatLng(
        location.coordinates.lat,
        location.coordinates.lng,
      ),
  );

  return <HeatmapLayer data={mappedCoordinates} options={options} />;
}

export default HeatLayer;
