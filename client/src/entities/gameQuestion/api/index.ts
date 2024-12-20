import { IApiResponseReject, IApiResponseSuccess } from "@/shared/types";
import {   IGameQuestion } from "../model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { defaultRejectedAxiosError } from "@/shared/consts";
import { AxiosError } from "axios";

enum GAMEQUESTION_THUNKS_TYPES {


    CREATE = 'gameQuestion/create',
  }


export const createGameQuestionThunk = createAsyncThunk<
  IApiResponseSuccess<IGameQuestion>,

  {game_id:number, question_id:number},

  { rejectValue: IApiResponseReject}
>(GAMEQUESTION_THUNKS_TYPES.CREATE, async (newGameQuestion, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<IApiResponseSuccess<IGameQuestion>>(

      '/game-question',
      newGameQuestion
    );
    if (data.statusCode !== 201 && data.error !== null) {
      return rejectWithValue(defaultRejectedAxiosError);
    }

    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }

  
});
