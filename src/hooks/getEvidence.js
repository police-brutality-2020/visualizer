import { useState, useEffect } from 'react';
import axios from 'axios';

const useEvidence = (id) => {
  const [evidence, setEvidence] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.846policebrutality.com/api/incidents/${id}?include=evidence`,
      );
      setEvidence(data.data[0]);
    };

    fetchData();
  }, [id]);

  return evidence;
};

export default useEvidence;
