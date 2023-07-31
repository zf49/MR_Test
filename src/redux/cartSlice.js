import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    selectedSize: null,
    clickCount: 0,
    labelClickCounts: {},
  },
  reducers: {
    setSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    setProductInfo: (state, action) => {
      const { size, title, price, pic } = action.payload;
      state.labelClickCounts[size] = {
        title,
        price,
        pic,
        clickCount: (state.labelClickCounts[size]?.clickCount || 0) + 1,
      };
      state.clickCount += 1; 
    },
  },
});

export const { setSize, setProductInfo } = cartSlice.actions;
export default cartSlice.reducer;
