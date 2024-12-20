import { topicReducer } from "@/entities/topics";
import { userReducer } from "@/entities/user/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user:userReducer,
    topic:topicReducer

  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
