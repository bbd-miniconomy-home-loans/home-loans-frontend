import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { FinancialServicesBlock } from './FinancialServicesBlock';

import BalanceIcon from '@mui/icons-material/Balance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import StoreIcon from '@mui/icons-material/Store';
import AnalyticsIcon from '@mui/icons-material/Analytics';

import { BoxStyle, ContainerStyle } from './styles';
import { Variables } from '../pages/variables';

export const FinancialServices = () => {
  return (
    <Container sx={{
      margin: 2,
      borderRadius: 2,
      padding: 2,
      border: `0.1rem solid ${Variables.lightGrey}`,
    }}>
      <Typography variant='h4' sx={{ px: 1, py: 2, pb: 5 }}>Financial Services</Typography>

      <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        flexGrow: 1,
        gap: 5,
      }}>
        <Container sx={{ ContainerStyle }}>
          <Box sx={BoxStyle}>
            <Typography variant='h6'>Commercial Bank</Typography>
            <Box>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                <Grid item xs={6}>
                  <FinancialServicesBlock
                    Icon={BalanceIcon}
                    text='Balances'
                    value={12341}
                  />
                </Grid>

                <Grid item xs={6}>
                  <FinancialServicesBlock
                    Icon={ReceiptIcon}
                    text='Transactions'
                    value={12341}
                  />
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Container>

        <Container sx={{ ContainerStyle }}>
          <Box
            sx={BoxStyle}>

            <Typography variant='h6'>Stock Exchange</Typography>
            <Box>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                <Grid item xs={6}>
                  <FinancialServicesBlock
                    Icon={StoreIcon}
                    text='Buy/Sell Stocks'
                    value={12341.12312}
                  />
                </Grid>

                <Grid item xs={6}>

                  <FinancialServicesBlock
                    Icon={AnalyticsIcon}
                    text='Market Overview'
                    value={12341.12321}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};
