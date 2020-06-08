/* global google */
import React from 'react';
import { GoogleMap, HeatmapLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const options = {
  center: {
    lat: 39,
    lng: -98,
  },
  zoom: 5,
};

function HeatMap() {
  return (
    <GoogleMap mapContainerStyle={containerStyle} options={options}>
      <HeatmapLayer
        data={[
          new google.maps.LatLng(37.782, -122.447),
          new google.maps.LatLng(37.782, -122.445),
          new google.maps.LatLng(37.782, -122.443),
          new google.maps.LatLng(37.782, -122.441),
          new google.maps.LatLng(37.782, -122.439),
          new google.maps.LatLng(37.782, -122.437),
          new google.maps.LatLng(37.782, -122.435),
          new google.maps.LatLng(37.785, -122.447),
          new google.maps.LatLng(37.785, -122.445),
          new google.maps.LatLng(37.785, -122.443),
          new google.maps.LatLng(37.785, -122.441),
          new google.maps.LatLng(37.785, -122.439),
          new google.maps.LatLng(37.785, -122.437),
          new google.maps.LatLng(37.785, -122.435),
        ]}
      />
    </GoogleMap>
  );
}

export default HeatMap;
