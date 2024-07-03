import React from 'react';
import { Container } from '@mui/material';
import { Variables } from '../common/variables';

export const BorderedBox = (props) => {
  return (
    <Container sx={{
      margin: 2,
      borderRadius: 2,
      padding: 2,
      border: `0.1rem solid ${Variables.lightGrey}`,
    }}>
      {props.children}
    </Container>
  );
};

