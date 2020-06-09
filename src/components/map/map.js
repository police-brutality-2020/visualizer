import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import HeatLayer from './heat-layer';
import getClosetCity from '../../util/closestCity';

const containerStyle = {
  flex: '1',
  height: '100vh',
};

const options = {
  center: {
    lat: 38,
    lng: -98,
  },
  restriction: {
    latLngBounds: {
      north: 52,
      south: 22,
      west: -136,
      east: -60,
    },
  },
  zoom: 5,
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
};

function Map({ data }) {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(mapInstance) {
    setMap(mapInstance);
  }, []);

  function handleMapClick(e) {
    const coordinate = {
      lat: e.latLng.lat(),
      long: e.latLng.lng(),
    };
    const city = getClosetCity(coordinate, data);
    map.setZoom(8);
    map.panTo({
      lat: Number(city.coordinate.lat),
      lng: Number(city.coordinate.long),
    });
    console.log(city);
  }

  return (
    <LoadScript
      libraries={['visualization']}
      googleMapsApiKey="AIzaSyDGPAOkljsjapYWRKo89y6McxkZ3JzwZKI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        onLoad={onLoad}
        onClick={handleMapClick}
      >
        <HeatLayer data={data} />
      </GoogleMap>
    </LoadScript>
  );
}

Map.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Map;
