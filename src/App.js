import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Navbar } from './components';
import MainRoutes from './components/Routes/MainRoutes';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <MainRoutes
        products={products}
        cart={cart}
        totalItems={cart?.total_items}
        onAddToCart={handleAddToCart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleEmptyCart={handleEmptyCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
