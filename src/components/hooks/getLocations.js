import { useState, useEffect } from 'react';
import axios from 'axios';
import states from 'us_latlng_json';
import getStateTwoDigitCode from '../../data/states';

const useLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: res } = await axios.get(
        'https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json',
      );
      setLocations(
        res.data.map((el) => {
          const state = getStateTwoDigitCode(el.state);
          if (state) {
            let { city } = el;
            if (city === 'New York City') {
              city = 'New York';
            }
            if (!!states[state].cities[city] && city.length > 0) {
              return {
                ...el,
                coordinates: {
                  lat: states[state].cities[city].lat,
                  lng: states[state].cities[city].lng,
                },
              };
            }
          }
          return el;
        }),
      );
    };

    fetchData();
  }, []);

  return locations;
};

export default useLocations;
