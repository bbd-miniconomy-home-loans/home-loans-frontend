import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FinancialServicesBlock } from './FinancialServicesBlock';


export const FinancialServices = () => {
  return (
  <Container maxWidth="md" sx={{ width: '90%',
     marginBottom: 2,
      border: '1px solid lightgrey',
      borderRadius: 4,
      gap: 4,
      padding: 2,
    }}>
      <Container>
        <Typography variant='h4' sx={{ p: 1 }}>Commercial Bank</Typography>
      </Container>
    <Box
      sx={{
        bgcolor: '#F8F9FAFF;',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        borderRadius: 4,
        height: '30vh',
        px: 8,
        py: 4,
      }}
    >
      <FinancialServicesBlock
        text='Balances'
        value={12341}
      />
      <FinancialServicesBlock
        text='Transactions'
        value={12341}
      />
    </Box>

    <Container>
      <Typography variant='h4' sx={{ p: 1 }}>Stock Exchange</Typography>
    </Container>
    <Box
      sx={{
        bgcolor: '#F8F9FAFF;',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        px: 8,
        py: 4,
        height: '30vh',
        borderRadius: 4,
      }}
    >
      <FinancialServicesBlock
        text='Buy/Sell Stocks'
        value={12341.12312}
      />
      <FinancialServicesBlock
        text='Market Overview'
        value={12341.12321}
      />
    </Box>
  </Container>
  );
};
