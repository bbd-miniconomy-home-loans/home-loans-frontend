import React from 'react';

import { Link } from 'react-router-dom';

import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import { Variables } from '../common/variables';

export const Logo = () => {
  return (
    <Button color='secondary' to="/" component={Link}>
      <AdbIcon sx={{ color: Variables.darkColor, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    </Button>
  );
};
