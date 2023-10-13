import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "category",
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.items.reduce(
        (acc, item) => (acc += item.price),
        0
      );
    },
    removeProducts: (state) => {
      state.items = [];
    },
    addQuantity: (state, action) => {
      state.items.map((item) =>
        item.id === action.payload ? item.count++ : item
      );
    },
    subtractQuantity: (state, action) => {
      state.items.map((item) =>
        item.id === action.payload ? item.count-- : item
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeProduct,
  getTotalPrice,
  removeProducts,
  addQuantity,
  subtractQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
