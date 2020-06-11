import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import HeatLayer from './heat-layer';
import getClosetCity from '../../util/closestCity';

const libraries = ['visualization'];
const googleMapsApiKey = 'AIzaSyDGPAOkljsjapYWRKo89y6McxkZ3JzwZKI';

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

function Map({ incidents, onCityClick }) {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(mapInstance) {
    setMap(mapInstance);
  }, []);

  function handleMapClick(e) {
    const city = getClosetCity(
      {
        lat: e.latLng.lat(),
        long: e.latLng.lng(),
      },
      incidents,
    );

    map.setZoom(8);
    map.panTo({
      lat: Number(city.coordinate.lat),
      lng: Number(city.coordinate.long),
    });

    onCityClick(city.name);
  }

  return (
    <LoadScript libraries={libraries} googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options}
        onLoad={onLoad}
        onClick={handleMapClick}
      >
        <HeatLayer incidents={incidents} />
      </GoogleMap>
    </LoadScript>
  );
}

Map.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default Map;
