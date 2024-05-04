import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { filterCasesByCategories } from './caseSlice';

export const removeFromCategory = createAsyncThunk(
  'category/removeFromCategory',
  async(payload, { dispatch, getState }) => {
    const store= getState();
    dispatch(setCategories(store.category.value.filter((el => el !== payload)))); 
    dispatch(filterCasesByCategories(store.category.value.filter((el => el !== payload))));
  }
);

export const addToCategory = createAsyncThunk(
  'category/addToCategory',
  async(payload, { dispatch, getState }) => {
    const store= getState();
    dispatch(addOneToCategories(payload)); 
    dispatch(filterCasesByCategories([...store.category.value, payload]));
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