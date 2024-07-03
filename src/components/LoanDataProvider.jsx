import React, { createContext } from 'react';
import { useTableData } from '../hooks';
export const LoanDataContext = createContext();

export const LoanDataProvider = ({ children }) => {
  const { data, loading, error } = useTableData();

  return (
    <LoanDataContext.Provider value={{ data, loading, error }}>
      {children}
    </LoanDataContext.Provider>
  );
};
