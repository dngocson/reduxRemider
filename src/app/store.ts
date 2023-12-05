import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import postReducer from "../feature/post/postSlice";
import userSlice from "../feature/users/userSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
