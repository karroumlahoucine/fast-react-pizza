import userReducer from './features/user/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
