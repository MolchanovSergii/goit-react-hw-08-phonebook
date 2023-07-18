import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});

export const filterReducers = filterSlice.reducer;
