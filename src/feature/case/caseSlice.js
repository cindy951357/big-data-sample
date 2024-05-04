import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIxIiwiZXhwIjoxNzE2NjIzODY0fQ.N7ZLHiwARPLjDsPE1jCbSeUs2O03kFI36B6l9rQNMTs';

const fetchCases = createAsyncThunk(
    'case/fetchCases',
    async () => {
        const response = await fetch('https://svc-dashboard-dummy-api-7ej42xs2pa-de.a.run.app/api/get-data',
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(        
                    {
                        "start_time": "",
                        "end_time": "",
                        "category": [],
                        "chunk": 1
            }),
        }
    );
    const toJson = response.json();

    return toJson;
    },
  )

export const caseSlice = createSlice({
  name: 'case',
  initialState: {
    value: [{table_data: []}],
    filterCases: [],
  },
  reducers: {
    filterCasesByCategories: (state, action) => {
        const wantCategories = action.payload;
        console.log("wantCategories",wantCategories)
        state.filterCases = state.filterCases.filter((elem) => 
            wantCategories.includes(elem.main_category))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCases.fulfilled, (state, action) => {
      state.value = action.payload.data;
      state.filterCases = action.payload.data.table_data;
      console.log("state.filterCases", state.filterCases);
    })
  },
})

export const { getCases,
    filterCasesByCategories,
 } = caseSlice.actions
export { fetchCases };

export default caseSlice.reducer