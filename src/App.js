import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavigationBar, Dashboard, Bank, Loans, Callback } from './pages';
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  const { authenticated, setAuthenticated } = useState(null)
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><NavigationBar /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path='/bank' element={<ProtectedRoute><Bank /></ProtectedRoute>} />
          <Route path='/loans' element={<ProtectedRoute><Loans /></ProtectedRoute>} />
          <Route path='/callback' element={<Callback/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;