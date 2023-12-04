import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "../feature/counter/counterSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: couterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
