import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { urls } from '../common';

const generateRandomLoanData = () => {
  const statuses = ['pending', 'approved', 'rejected', 'completed'];
  const loans = [];
  
  for (let i = 0; i < 10; i++) {
    const name = `${faker.person.firstName()  } ${  faker.person.lastName()}`;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const installment_cents = Math.floor(Math.random() * (2000000 - 500000 + 1)) + 500000;
    const interest_rate = Math.random() * (15 - 13) + 13; 
  
    loans.push({
      name,
      status,
      installment_cents,
      interest_rate: parseFloat(interest_rate.toFixed(2)),
    });
  }
  
  return loans;
};

const getTableData = () => {
  fetch(`${urls.homeLoans}/admin/persona`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
};

export const useTableData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {

        setData(getTableData());
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