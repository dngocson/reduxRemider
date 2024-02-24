import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import { useDispatch } from "react-redux";
import userReducer from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});

// Defining the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Defining the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Defining a custom hook for accessing dispatch function
// This hook provides the AppDispatch type to useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Hook for accessing dispatch function with the correct type
