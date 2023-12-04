import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = [
  { id: "1", title: "sleeping beauty", content: "snow white by my side" },
  { id: "2", title: "red beast", content: "kong and gozilla" },
];

type Post = {
  id: string;
  title: string;
  content: string;
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdd: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      //   prepare(title, content) {
      //     return {
      //       payload: {
      //         id: nanoid(),
      //         title,
      //         content,
      //       },
      //     };
      //   },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            title: data.title,
            content: data.content,
          },
        };
      },
    },
  },
});

export default postSlice.reducer;
export const { postAdd } = postSlice.actions;

export const getAllPost = (state: RootState) => state.post;
