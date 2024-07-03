import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import { displayDough } from '../common';

export const LoanTableRow = ({ avatarUrl, name, status, primeInterestRate, installmentAmountCents, interestRate, asHeader = false}) => {
  return (
    <TableRow sx={{ width: '100%', fontWeight: asHeader ? 'bold' : 'normal' }}>
      <TableCell style={{ width: '10%' }}>
        {!asHeader && <Avatar alt="Avatar" src={`https://i.pravatar.cc/300?u=${name}`} />}
      </TableCell>
      <TableCell style={{ width: '20%' }}>{name}</TableCell>
      <TableCell style={{ width: '30%' }}>{status}</TableCell>
      <TableCell style={{ width: '30%' }}>{asHeader ? installmentAmountCents : displayDough(installmentAmountCents)}</TableCell>
      <TableCell style={{ width: '30%' }}>{asHeader ? interestRate : `${interestRate}% (+${(interestRate-primeInterestRate).toFixed(2)}%)`}</TableCell>
    </TableRow>
  );
};