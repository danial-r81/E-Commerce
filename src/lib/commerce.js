import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_API_KEY);

// export const fetchProducts = async () => {
//   const { data } = await commerce.products.list();
//   console.log(data);

//   return Promise.resolve(data);
// };

// export const fetchCart = async () => {
//   const response = await commerce.cart.retrieve();
//   return Promise.resolve(response);
// };

// export const handleAddToCart = async (productId, quantity) => {
//   const item = await commerce.cart.add(productId, quantity);
//   return Promise.resolve(item.cart);
// };
