import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { filterCasesByCategories } from './caseSlice';



export const addToCategory = createAsyncThunk(
  'category/addToCategory',
  async(payload, { dispatch, getState }) => {
    const store= getState();

  }
);

export const startEndDateSlice = createSlice({
  name: 'startEndDate',
  initialState: {
    value: {
        startDate: '',
        endDate: '',
    },
  },
  reducers: {
    setStartDate: (state, action) => {
        state.value.startDate = action.payload
    },
    setEndDate: (state, action) => {
        state.value.endDate = action.payload
    },
    setStartAndEndDate: (state, action) => {
        state.value.startDate = action.payload.inputStartDate;
        state.value.endDate = action.payload.inputEndDate;
    },
  },
})

export const { 
    setStartDate,
    setEndDate,
    setStartAndEndDate,
} = startEndDateSlice.actions


export default startEndDateSlice.reducer