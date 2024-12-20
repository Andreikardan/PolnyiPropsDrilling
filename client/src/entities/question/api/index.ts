import { IApiResponseReject, IApiResponseSuccess } from '@/shared/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuestionType } from '../model';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import { defaultRejectedAxiosError } from '@/shared/consts';
import { AxiosError } from 'axios';

enum QUESTION_THUNKS_TYPES {
  GET_BY_ID = 'question/getById',
}

export const getQuestionByIdThunk = createAsyncThunk<
  IApiResponseSuccess<QuestionType>,
  number,
  { rejectValue: IApiResponseReject }
>(QUESTION_THUNKS_TYPES.GET_BY_ID, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<
      IApiResponseSuccess<QuestionType>
    >(`/questions/${id}`);
    if (data.statusCode !== 200 && data.error !== null) {
      return rejectWithValue(defaultRejectedAxiosError);
    }

    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});

