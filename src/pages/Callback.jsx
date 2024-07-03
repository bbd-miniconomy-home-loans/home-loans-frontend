let urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

import React from 'react';
import { Container } from '@mui/material';

export const Callback = () => {

  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      p: 5,
    }}>
      sss
      {code}
    </Container>
  );
};
