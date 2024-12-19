import type { UserType } from '../model/types';
import { createSlice } from '@reduxjs/toolkit';
import { refreshTokensThunk, signInThunk, signOutThunk, signUpThunk } from '../api';
import { message } from 'antd';

type UserState = {
  user: UserType | null;
  error: string | null;
  loading: boolean;
  isInitialized: boolean;
};

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
  isInitialized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refreshTokensThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshTokensThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
      })
      .addCase(refreshTokensThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload!.error;
        state.isInitialized = true;
      })

      .addCase(signUpThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      })
      .addCase(signInThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!.error;
        state.user = null;
        message.error(action.payload?.error);
      })

      .addCase(signOutThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOutThunk.fulfilled, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(signOutThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload!.error;
        message.error(action.payload?.error);
      });
  },
});

export const userReducer = userSlice.reducer;
