import { configureStore } from '@reduxjs/toolkit';
import caseReducer from './feature/case/caseSlice';
import categorySlice from './feature/case/categorySlice';
import startEndDateSlice from './feature/case/startEndDateSlice';

export default configureStore({
  reducer: {
    case: caseReducer,
    category: categorySlice,
    startEndDate: startEndDateSlice,
  },
})