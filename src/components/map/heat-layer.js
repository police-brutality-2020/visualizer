/* global google */
import React from 'react';
import PropTypes from 'prop-types';
import { HeatmapLayer } from '@react-google-maps/api';

const options = {
  dissipating: false,
  radius: 2,
};

function HeatLayer({ data }) {
  const mappedCoordinates = data.map(
    (location) =>
      new google.maps.LatLng(location.geocoding.lat, location.geocoding.long),
  );

  return <HeatmapLayer data={mappedCoordinates} options={options} />;
}

HeatLayer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeatLayer;
