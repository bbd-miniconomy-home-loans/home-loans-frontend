
import React from 'react';
import { Unauthenticated } from '../pages';

const useAuth = () => {
  return true
};

export const ProtectedRoute = ({children}) => {
  const isAuthenticated = useAuth();
  console.log(children)
  if (!isAuthenticated) {
    return <Unauthenticated/>;
  } 
  return children;
};