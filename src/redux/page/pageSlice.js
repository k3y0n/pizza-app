import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
    setFiltersPage: (state, action) => {
      state.value = Number(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage, setFiltersPage } = pageSlice.actions;

export default pageSlice.reducer;
