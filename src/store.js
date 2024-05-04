import { configureStore } from '@reduxjs/toolkit';
import caseReducer from './feature/case/caseSlice';
import categorySlice from './feature/case/categorySlice';

export default configureStore({
  reducer: {
    case: caseReducer,
    category: categorySlice,
  },
})