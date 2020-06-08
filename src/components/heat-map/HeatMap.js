import React from 'react';
import { GoogleMap, HeatmapLayer, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 39.8097343,
  lng: -98.5556199,
};

function HeatMap() {
  const onLoad = React.useCallback((map) => {
    map.setCenter(center);
    map.setZoom(5);
  });

  return (
    <LoadScript
      libraries={['visualization']}
      googleMapsApiKey="AIzaSyDGPAOkljsjapYWRKo89y6McxkZ3JzwZKI"
    >
      <GoogleMap onLoad={onLoad} mapContainerStyle={containerStyle}>
        <HeatmapLayer
          data={
            [
              /* new google.maps.LatLng(37.782, -122.447),
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
          new google.maps.LatLng(37.785, -122.435), */
            ]
          }
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default HeatMap;
