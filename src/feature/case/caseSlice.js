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
  },
  reducers: {
    getCases: async(state) => {
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
        state.value = response.json().then(result => {
            state.value = result;
            console.log('result'+result);
        });
        
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCases.fulfilled, (state, action) => {
      state.value = action.payload.data;
    })
  },
})

export const { getCases } = caseSlice.actions
export { fetchCases };

export default caseSlice.reducer