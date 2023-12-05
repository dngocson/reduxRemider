import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const initialState = [];
const USER_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get(USER_URL);
    return [...response.data];
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
    return "An error occurred";
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      action.payload.map((item) => state.push(item));
    });
  },
});

export default userSlice.reducer;

///////////////////////////////////
export const selectAllUser = (state: RootState) => state.user;
