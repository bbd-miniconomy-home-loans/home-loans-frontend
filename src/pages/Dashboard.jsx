import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { FinancialServices, LoanApplications } from '../components';
import { Variables } from '../common/variables';

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
      <Box>
        <LoanApplications />
      </Box>
    </Container>
  );
};
