import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { QuestionType } from '../model';
import {
  getQuestionByIdThunk,
} from '../api';

type QuestionState = {
  question: QuestionType | null;
  error: string | null;
  loading: boolean;
};

const initialState: QuestionState = {
  question: null,
  error: null,
  loading: false,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestionByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload.data;
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(getQuestionByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.question = null;
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      })
  },
});

export const questionReducer = questionSlice.reducer;
