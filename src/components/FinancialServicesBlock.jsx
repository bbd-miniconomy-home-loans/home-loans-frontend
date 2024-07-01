import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { displayDough } from '../common';

export const FinancialServicesBlock = ({ text, value }) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundColor: '#00BDD66B',
        p: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Typography sx={{ p: 0.5 }}>{text}</Typography>
      </Container>
      <Container>
        <Typography variant="h6" sx={{ p: 0.5 }}>
          {displayDough(value)}
        </Typography>
      </Container>
    </Box>
  );
};

FinancialServicesBlock.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
