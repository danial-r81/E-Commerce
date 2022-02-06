import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainRoutes from './components/Routes/MainRoutes';
import { fetchCart, fetchProducts } from './redux/feature/products';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, []);

  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
