import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../app/filterSlice';

export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
