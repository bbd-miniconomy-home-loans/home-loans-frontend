import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import { displayDough } from '../common';
import { Chip } from '@mui/material';
import { LoanDataContext } from './LoanDataProvider';
import { LoanTableRow } from './LoanTableRow';

export const LoanTableRows = () => {

  const { data, loading, error } = React.useContext(LoanDataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const rows = [];
  
  if (data) {
    for (let i = 0; i < data.length; i++) {
      const value = data[i];
      rows.push(<LoanTableRow
        key={i}
        name={value.name}
        status={value.status}
        installmentAmountCents={value.installment_cents}
        primeInterestRate={12}
        interestRate={value.interest_rate}
        asHeader={false}
      />);
    }
  
    return (
      rows
    );
  }
};