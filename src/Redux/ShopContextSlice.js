// src/features/items/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
     currency : "$",
     delivery_fee : 10,
     search : '',
     showSearch : false,
     cartItems : {},
   },
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    // removeItem: (state, action) => {
    //   return state.filter(item => item.id !== action.payload);
    // },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
