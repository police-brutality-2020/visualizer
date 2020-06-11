import { useState, useEffect } from 'react';
import axios from 'axios';

const useIncidents = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://api.846policebrutality.com/api/incidents',
      );
      setIncidents(data.data);
    };

    fetchData();
  }, []);

  return incidents;
};

export default useIncidents;
