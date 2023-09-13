import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
  }
});

export const { setItems } = cartSlice.actions;
export default cartSlice.reducer;