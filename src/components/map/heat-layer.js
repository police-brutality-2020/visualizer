/* global google */
import React from 'react';
import PropTypes from 'prop-types';
import { HeatmapLayer } from '@react-google-maps/api';

const options = {
  dissipating: false,
  radius: 2,
};

function HeatLayer({ incidents }) {
  const coordinates = incidents.map(
    ({ geocoding }) => new google.maps.LatLng(geocoding.lat, geocoding.long),
  );

  return <HeatmapLayer data={coordinates} options={options} />;
}

HeatLayer.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeatLayer;
