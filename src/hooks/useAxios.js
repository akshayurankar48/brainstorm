import { useState } from 'react';
import axios from 'axios';

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, method = 'GET', requestBody = {}) => {
    setLoading(true);
    setError(null);
    const BASE_URL = 'https://api.spacexdata.com/v3';
    const url = `${BASE_URL}/${endpoint}`;

    try {
      const response = await axios({
        method,
        url,
        data: requestBody,
      });
      setData(response.data);
      return response.data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useAxios;
