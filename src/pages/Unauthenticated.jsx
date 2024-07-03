import React from 'react';
import { LoginLink } from '../components/authentication';
import { Box, Container, Typography } from '@mui/material';
import { BoxStyle } from '../components/styles';

export const Unauthenticated = () => {

  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      p: 5,
    }}>
          <Box sx={BoxStyle}>
          <Typography variant='h3' sx={{ 
            p: 5,
              color: '#00BDD6'
            }}
          > 
            Try logging in perhaps, you biscuit 
          </Typography>
      <LoginLink/>
      </Box>
    </Container>
  );
};
