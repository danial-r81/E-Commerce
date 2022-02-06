import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feature/products';

const store = configureStore({
  reducer: {
    productsReducer,
  },
});

export default store;
