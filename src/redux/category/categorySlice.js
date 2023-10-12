import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: 0,
  },
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
