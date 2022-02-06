import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products, Cart, Navbar } from '..';
import Checkout from '../checkout/Checkout';

const MainRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
