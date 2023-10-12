import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    value: 'rating',
  },
  reducers: {
    setSort: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
