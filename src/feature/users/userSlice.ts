import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = [
  {
    id: "0",
    name: "Son",
  },
  {
    id: "1",
    name: "Khanh",
  },
  {
    id: "2",
    name: "Truc",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

///////////////////////////////////
export const selectAllUser = (state: RootState) => state.user;
