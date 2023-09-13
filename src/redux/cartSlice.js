import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    toggleCart: (state, action) => {
      state.isOpen = !state.isOpen
    },
    updateCartItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item = action.payload
          item.quantity = action.payload.quantity
        }
        return item
      })
    }
  }
})

export const { addToCart, removeFromCart, toggleCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;