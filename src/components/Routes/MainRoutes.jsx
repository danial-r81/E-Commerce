import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products, Cart, Navbar } from '..';
import Checkout from '../checkout/Checkout';

const MainRoutes = ({
  products,
  cart,
  totalItems,
  onAddToCart,
  handleUpdateCartQty,
  handleEmptyCart,
  handleRemoveFromCart,
}) => {
  return (
    <Router>
      <Navbar totalItems={totalItems} />
      <Routes>
        <Route
          path='/'
          element={<Products products={products} onAddToCart={onAddToCart} />}
        />
        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          }
        />
        <Route
          path='/checkout'
          element={<Checkout cart={cart} handleEmptyCart={handleEmptyCart} />}
        />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
