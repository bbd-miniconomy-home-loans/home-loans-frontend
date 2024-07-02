import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { FinancialServices } from '../components';
import { Variables } from './variables';

export const Dashboard = () => {

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        p: 5,
      }}>

      <Container>
        <Typography variant='h3' sx={{ p: 5 }}>Dashboard</Typography>
      </Container>

      <FinancialServices />

      <Container maxWidth="md" sx={{ width: '90%' }}>
        <Box sx={{ bgcolor: Variables.secondaryColor, height: '30vh' }}>
          Loan Applications
        </Box>
      </Container>
    </Container>
  );
};
