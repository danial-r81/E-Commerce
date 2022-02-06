import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commerce } from '../../lib/commerce';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const { data } = await commerce.products.list();

  return Promise.resolve(data);
});

export const fetchCart = createAsyncThunk('fetchCart', async () => {
  try {
    return Promise.resolve(await commerce.cart.retrieve());
  } catch (err) {
    console.log(err.messege);
  }
});

export const handleAddToCart = createAsyncThunk('addToCart', async (arg) => {
  try {
    const { cart } = await commerce.cart.add(arg, 1);
    return Promise.resolve(cart);
  } catch (err) {
    console.log(err);
  }
});

export const handleUpdateCartQty = createAsyncThunk(
  'updateCartQty',
  async (arg) => {
    const { productId, quantity } = arg;
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      return Promise.resolve(cart);
    } catch (err) {
      console.log(err);
    }
  }
);

export const handleRemoveFromCart = createAsyncThunk(
  'removeFromCart',
  async (arg) => {
    try {
      const { cart } = await commerce.cart.remove(arg);
      return Promise.resolve(cart);
    } catch (err) {
      console.log(err);
    }
  }
);

export const handleEmptyCart = createAsyncThunk('emptyCart', async () => {
  try {
    const { cart } = await commerce.cart.empty();
    return Promise.resolve(cart);
  } catch (err) {
    console.log(err);
  }
});

const productsReducer = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: [],
  },
  extraReducers: {
    [fetchProducts.rejected]: () => {
      console.log('fetch products rejectd');
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [handleAddToCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [handleUpdateCartQty.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [handleRemoveFromCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [handleEmptyCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
  },
});
export default productsReducer.reducer;
