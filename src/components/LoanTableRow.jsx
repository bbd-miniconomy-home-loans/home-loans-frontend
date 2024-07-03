import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import { displayDough } from '../common';
import { Chip } from '@mui/material';

export const LoanTableRow = ({ avatarUrl, name, status, primeInterestRate, installmentAmountCents, interestRate, asHeader = false }) => {

  let color;
  switch (status)
  {
  case 'completed':
    color = 'var(--completed-color)';
    break;
  case 'pending':
    color = 'var(--pending-color)';
    break;
  case 'approved':
    color = 'var(--approved-color)';
    break;
  case 'rejected':
    color = 'var(--rejected-color)';
    break;
  }

  return (
    <TableRow sx={{ width: '100%', fontWeight: asHeader ? 'bold' : 'normal' }}>
      <TableCell style={{ width: '10%' }}>
        {!asHeader && <Avatar alt="Avatar" src={`https://i.pravatar.cc/300?u=${name}`} />}
      </TableCell>
      <TableCell style={{ width: '20%' }}>{name}</TableCell>
      <TableCell style={{ width: '30%' }}>{asHeader ? status : <Chip label={status} sx={{
        backgroundColor: color,
        width: '50%',
        color: '#fff',
      }}/>}</TableCell>
      <TableCell style={{ width: '30%' }}>{asHeader ? installmentAmountCents : displayDough(installmentAmountCents)}</TableCell>
      <TableCell style={{ width: '30%', color: asHeader ? '#000' : 'var(--completed-color)'}}>{asHeader ? interestRate : `${interestRate}% (+${(interestRate-primeInterestRate).toFixed(2)}%)`}</TableCell>
    </TableRow>
  );
};