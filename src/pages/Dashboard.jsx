import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { BorderedBox, FinancialServices, LoanApplications, LoanTableRow } from '../components';
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
      
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '80vw', gap: 1}}>
        <Box sx={{ flex: '1', minWidth: '0' }}>
          <LoanApplications />
        </Box>
        <Box sx={{ flex: '2', minWidth: '0', display: 'flex', flexDirection: 'column', gap: 1}}>
          <BorderedBox>
            <Box sx={{ height: '40vh', backgroundColor: 'lightblue' }}>
              {/* Content for first child with height 40vh */}
            </Box>
          </BorderedBox>
          <BorderedBox>
            <Box sx={{ height: '60vh', overflowY: 'auto', // Add vertical scroll
                        '&::-webkit-scrollbar': {
                          width: '0.5em'
                        },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        } 
                    }}>
              <LoanTableRow
                name={'Name'}
                status={'Status'}
                installmentAmountCents={'Installment Amount'}
                primeInterestRate={''}
                interestRate={'Interest Rate'}
                asHeader={true}
              />
              <LoanTableRow
                name={'123j4'}
                status={'approved'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />
              <LoanTableRow
                name={'12a34'}
                status={'completed'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />
              <LoanTableRow
                name={'12b34'}
                status={'rejected'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />
              <LoanTableRow
                name={'12a34'}
                status={'other'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />
              <LoanTableRow
                name={'123v4'}
                status={'pending'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />
              <LoanTableRow
                name={'12634'}
                status={'pending'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />
              <LoanTableRow
                name={'12234'}
                status={'rejected'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />
              <LoanTableRow
                name={'12334'}
                status={'approved'}
                installmentAmountCents={123123.12312}
                primeInterestRate={12.5}
                interestRate={13.44}
              />

            </Box>
          </BorderedBox>
        </Box>
      </Box>

    </Container>
  );
};
