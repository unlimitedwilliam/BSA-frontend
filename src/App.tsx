import React from 'react';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Landing from './components/pages/homepage/landing';
import Dashboard from './components/pages/dashboard/dashboard';
import Products from './components/pages/products/products';
import Login from './components/pages/login/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Landing/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/products" element={<Products/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
