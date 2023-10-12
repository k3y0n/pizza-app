import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sort: "rating",
    type: "asc",
  },
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSort, setType } = sortSlice.actions;

export default sortSlice.reducer;
