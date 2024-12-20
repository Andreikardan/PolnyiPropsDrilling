
import { topicReducer } from "@/entities/topics";
import { questionReducer } from "@/entities/question/slice";
import { userReducer } from "@/entities/user/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    topic:topicReducer,
    user: userReducer,
    question: questionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
