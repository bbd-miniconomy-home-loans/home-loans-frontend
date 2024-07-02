import React from 'react';

import { Box, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { displayDough } from '../common';
import { Variables } from '../pages/variables';

export const FinancialServicesBlock = ({ text, value, Icon }) => {
  return (
    <Container
      sx={{
        borderRadius: 2.5,
        backgroundColor: Variables.secondaryColor,
        p: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon />
        <Typography sx={{ p: 0.5 }}>{text}</Typography>
      </Box>

      <Box>
        <Typography sx={{ p: 0.5 }}>
          {displayDough(value)}
        </Typography>
      </Box>
    </Container>
  );
};

FinancialServicesBlock.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
