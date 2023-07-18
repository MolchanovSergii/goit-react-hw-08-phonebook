import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export const contactsReduсers = contactsSlice.reducer;
