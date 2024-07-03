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
    // Simulate an API call with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        try {
          // Replace with actual fetch request to your endpoint
          setData(generateRandomLoanData());
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }, 1000); // Simulating 1 second delay
    };

    fetchData();

    // Clean up function (optional)
    return () => {
      // Any clean-up code goes here
    };
  }, []); // Empty dependency array means this effect runs only once

  return { data, loading, error };
};