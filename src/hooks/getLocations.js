import { useState, useEffect } from 'react';
import axios from 'axios';

const useLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://api.846policebrutality.com/api/incidents',
      );
      setLocations(data.data);
    };

    fetchData();
  }, []);

  return locations;
};

export default useLocations;
