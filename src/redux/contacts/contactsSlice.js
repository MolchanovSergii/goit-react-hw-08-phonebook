import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log(state);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
