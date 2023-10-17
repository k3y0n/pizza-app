import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import sortSlice from "./sort/sortSlice";
import pageSlice from "./page/pageSlice";
import searchSlice from "./search/searchSlice";
import cartSlice from "./cart/cartSlice";
import pizzaSlice from "./pizza/pizzaSlice";

export default configureStore({
  reducer: {
    category: categorySlice,
    sort: sortSlice,
    page: pageSlice,
    search: searchSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});
