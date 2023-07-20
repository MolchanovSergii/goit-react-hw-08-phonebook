import { createSlice } from '@reduxjs/toolkit';
import {
  handleRegister,
  handleLogIn,
  handleLogOut,
  handleFetchCurrentUser,
} from './authReducers';
import { handlePending, handleRejected } from 'redux/contacts/contactsReducers';

import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(logIn.fulfilled, handleLogIn)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(fetchCurrentUser.fulfilled, handleFetchCurrentUser)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending),

  // {
  //   [register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logOut.fulfilled](state, action) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  //   [fetchCurrentUser.fulfilled](state, action) {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //   },
  // },
});

export const authReducer = authSlice.reducer;
