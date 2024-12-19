import { IApiResponseSuccess, IApiResponseReject } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArrayTopicsType } from "../model/types";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { AxiosError } from "axios";

enum TOPICS_THUNKS_TYPES {
  GET_ALL = "topic/getAll",
}
export const getTopicsWithQuestions = createAsyncThunk<
  IApiResponseSuccess<ArrayTopicsType>,
  void,
  { rejectValue: IApiResponseReject }
>(TOPICS_THUNKS_TYPES.GET_ALL, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<
      IApiResponseSuccess<ArrayTopicsType>
    >("/topics");
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});
