import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './category/categorySlice';
import sortSlice from './sort/sortSlice';

export default configureStore({
  reducer: {
    category: categorySlice,
    sort: sortSlice,
  },
});
