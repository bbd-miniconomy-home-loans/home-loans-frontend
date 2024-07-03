import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { BorderedBox, FinancialServices, LoanApplications, LoanDataProvider, LoanTableRow } from '../components';
import { Variables } from '../common/variables';
import { LoanTableRows } from '../components/LoanTableRows';

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
      <LoanDataProvider>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '80vw', gap: 1 }}>
          <Box sx={{ flex: '1', minWidth: '0' }}>
            <LoanApplications />
          </Box>
          <Box sx={{ flex: '2', minWidth: '0', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <BorderedBox>
              <Box sx={{ height: '40vh', backgroundColor: 'lightblue' }}>
                {/* Content for first child with height 40vh */}
              </Box>
            </BorderedBox>
            <BorderedBox>
              <Box sx={{ height: '60vh', overflowY: 'auto', // Add vertical scroll
                '&::-webkit-scrollbar': {
                  width: '0.5em',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                }, 
              }}>
                <LoanTableRow
                  name={'Name'}
                  status={'Status'}
                  installmentAmountCents={'Installment Amount'}
                  primeInterestRate={''}
                  interestRate={'Interest Rate'}
                  asHeader={true}
                />
                <LoanTableRows/>
              </Box>
            </BorderedBox>
          </Box>
        </Box>
      </LoanDataProvider>

    </Container>
  );
};
