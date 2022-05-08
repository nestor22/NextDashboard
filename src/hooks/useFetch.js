import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (enpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(enpoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.errpr(error);
    }
  }, []);

  return data;
};

export default useFetch;
