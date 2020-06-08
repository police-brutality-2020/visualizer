import React from 'react';
import { GoogleMap, HeatmapLayer, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 37.774546,
  lng: -122.433523,
};

function HeatMap() {
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }, []);

  return (
    <LoadScript
      libraries={['visualization']}
      googleMapsApiKey="AIzaSyDGPAOkljsjapYWRKo89y6McxkZ3JzwZKI"
    >
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
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
