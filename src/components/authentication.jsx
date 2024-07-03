import React from 'react';
import { cognitoConfig } from '../common/cognitoConfig';
import { Button } from '@mui/material';

const getLoginUrl = () => {
  return `https://${cognitoConfig.domain}/login?response_type=code&client_id=${cognitoConfig.clientId}&scope=${cognitoConfig.scope}&redirect_uri=${encodeURIComponent(cognitoConfig.redirectUri)}`;
};

const getLogoutUrl = () => {
  localStorage.clear();
  return `https://${cognitoConfig.domain}/logout?client_id=${cognitoConfig.clientId}&redirect_uri=${encodeURIComponent(cognitoConfig.redirectUri)}`;
};

export const LoginLink = () => (
  <Button sx={{
      background: "#00BDD6",
      color: 'white'
  }} 
  href={getLoginUrl()}>
    Login
  </Button>
);

export const LogoutLink = () => (
  <Button href={getLogoutUrl()}>Logout</Button>
);