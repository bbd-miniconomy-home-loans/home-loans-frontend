import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { urls } from '../common';

const getAccountBalance = () => {
  const url = `${urls.commercialBank}/account/balance`;
  const headers = new Headers();
  headers.append('X-Origin', 'home_loans');

  fetch(url, {
    method: 'GET',
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${  response}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
};

export const useAccountBalance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {

        setData(getAccountBalance());
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};