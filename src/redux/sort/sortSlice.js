import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    value: "rating",
    type: "asc",
  },
  reducers: {
    setSort: (state, action) => {
      state.value = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSort, setType } = sortSlice.actions;

export default sortSlice.reducer;
