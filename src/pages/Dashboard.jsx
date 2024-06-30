import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Variables } from './variables';

const Dashboard = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        p: 5,
      }}>

      <Container>
        <Typography variant='h3' sx={{ p: 5, ml: 5 }}>Dashboard</Typography>
      </Container>

      {/* TODO: set proper height for containers */}
      <Container maxWidth="md" sx={{ width: '90%', marginBottom: 2 }}>
        <Box sx={{ bgcolor: Variables.primaryColor, height: '30vh' }}>
          Financial Services
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ width: '90%' }}>
        <Box sx={{ bgcolor: Variables.secondaryColor, height: '30vh' }}>
          Loan Applications
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
