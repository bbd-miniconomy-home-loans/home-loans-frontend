import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

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

export const useTableData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {

        setData(generateRandomLoanData());
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