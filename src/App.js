import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { NavigationBar, Dashboard, Bank, Loans, StockExchange, Unauthenticated } from './pages';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar />}>
            <Route index element={<Dashboard />} />
            <Route path='/bank' element={<Bank />} />
            <Route path='/loans' element={<Loans />} />
            <Route path='/stock-exchange' element={<StockExchange />} />
            <Route path='/login' element={<Unauthenticated />} />

          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
