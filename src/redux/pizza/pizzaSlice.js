import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (params) => {
    const { currentPage, categoryId, sort, type } = params;
    const { data } = await axios.get(
      `https://651124e6829fa0248e3f8e9e.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId === 0 ? "" : `category=${categoryId}`
      }&sortBy=${sort}&order=${type}`
    );
    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    items: [],
    status: "",
  },
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.status = "loading";
      state.items = [];
      console.log("send request");
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
      console.log("request success");
    },
    [fetchPizza.rejected]: (state) => {
      state.status = "rejected";
      state.items = [];
      console.log("request rejected");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
