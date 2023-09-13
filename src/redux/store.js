import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import itemsReducer from './itemsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer
  }
});
