import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import postReducer from "../feature/post/postSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
