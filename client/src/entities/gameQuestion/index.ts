import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
 
import {
  createGameQuestionThunk,
 
   
} from '../gameQuestion/api';
import { ArrayGameQUestionType } from './model';

type GameQuestionState = {
  Questions: ArrayGameQUestionType | [];
  error: string | null;
  loading: boolean;
};

const initialState: GameQuestionState = {
  Questions: [],
  error: null,
  loading: false,
};

const gameQuestionSlice = createSlice({
  name: 'gameQuestion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      

       
      .addCase(createGameQuestionThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGameQuestionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.Questions = [...state.Questions, action.payload.data];
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(createGameQuestionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      })
 
 
  },
});

export const gameQuestionReducer = gameQuestionSlice.reducer;