import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";


export const cartSlice = createSlice({
  name: "category",
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.quantity++;
      } else {
        state.items.push(action.payload);
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeProducts: (state) => {
      state.items = [];
      state.totalPrice = calculateTotalPrice(state.items);
    },
    addQuantity: (state, action) => {
      state.items.map((item) =>
        item.id === action.payload ? item.count++ : item
      );
      state.totalPrice = calculateTotalPrice(state.items);
    },
    subtractQuantity: (state, action) => {
      state.items.map((item) =>
        item.id === action.payload ? item.count-- : item
      );
      state.totalPrice = calculateTotalPrice(state.items);
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
