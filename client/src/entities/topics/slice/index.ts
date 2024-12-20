import { createSlice } from "@reduxjs/toolkit";
import { ArrayTopicsType } from "../model/types";
import { getTopicsWithQuestionsThunk } from "../api";
import { message } from "antd";

type TopicStateType = {
  topics: ArrayTopicsType | [];
  error: null | string;
  loading: boolean;
};
const initialState: TopicStateType = {
  topics: [],
  error: null,
  loading: false,
};
const topicsSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopicsWithQuestionsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopicsWithQuestionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.topics = action.payload.data;
        message.success(action.payload.message);
      })
      .addCase(getTopicsWithQuestionsThunk.rejected, (state, action) => {
        state.error = action.payload!.error;
        state.loading = false
        state.topics = []
        message.error(action.payload!.error);

      });
  },
});
export const topicReducer = topicsSlice.reducer 