import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = [
  { id: "0", name: "son" },
  { id: "1", name: "nam" },
  { id: "2", name: "hoang" },
  { id: "3", name: "loc" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const getAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;
