import { Container, Typography } from '@mui/material';
import React from 'react';
import { Variables } from '../common/variables';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { BorderedBox } from './BorderedBox';

const data = [
  { argument: 'Monday', value: 10 },
  { argument: 'Tuesday', value: 40 },
  { argument: 'Wednesday', value: 10 },
  { argument: 'Thursday', value: 20 },
  { argument: 'Friday', value: 20 },
];

export const LoanApplications = () => {

  return (
    <BorderedBox>
      <Chart
        data={data}
      >
        <Typography variant='h4' sx={{ px: 1, py: 2, pb: 5 }}>Loan </Typography>
        < PieSeries valueField="value"
          argumentField="argument"
          innerRadius={0.55}
          outerRadius={1.0}
        />
      </Chart>
    </BorderedBox>
  );
};