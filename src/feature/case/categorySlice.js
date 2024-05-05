import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { filterCaseByDateAndCategory } from './caseSlice';

export const removeFromCategory = createAsyncThunk(
  'category/removeFromCategory',
  async(payload, { dispatch, getState }) => {
    const store = getState();
    dispatch(setCategories(store.category.value.filter((el => el !== payload)))); 
    dispatch(filterCaseByDateAndCategory(
      {
        wantCategory: store.category.value.filter((el => el !== payload)),
        inputStartDate: store.startEndDate.value.startDate,
        inputEndDate: store.startEndDate.value.endDate,
      }));
  }
);

export const addToCategory = createAsyncThunk(
  'category/addToCategory',
  async(payload, { dispatch, getState }) => {
    const store = getState();
    dispatch(addOneToCategories(payload)); 
    dispatch(filterCaseByDateAndCategory({
      wantCategory: [...store.category.value, payload],
      inputStartDate: store.startEndDate.value.startDate,
      inputEndDate: store.startEndDate.value.endDate,
    }));
  }
);

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: [],
    initialCategory: [],
  },
  reducers: {
    initCategories: (state, action) => {
       state.value = action.payload;
       state.initialCategory = action.payload;
    },
    addOneToCategories: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    setCategories: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { initCategories, 
  addOneToCategories,
  setCategories,
} = categorySlice.actions


export default categorySlice.reducer