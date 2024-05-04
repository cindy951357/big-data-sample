import { configureStore } from '@reduxjs/toolkit';
import caseReducer from './feature/case/caseSlice';

export default configureStore({
  reducer: {
    case: caseReducer,
  },
})