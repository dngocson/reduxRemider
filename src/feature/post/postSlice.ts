import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";

type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  user?: { userName: string; userId: string };
};

type PostState = (Post & { user?: { userName: string; userId: string } })[];

const initialState: PostState = [
  {
    id: "1",
    title: "sleeping beauty",
    content: "snow white by my side",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "red beast",
    content: "kong and gozilla",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
  },
];

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
            date: sub(new Date(), { minutes: 5 }).toISOString(),
            title: data.title,
            content: data.content,
            user: { userName: data.user.userName, userId: nanoid() },
          },
        };
      },
    },
  },
});

export default postSlice.reducer;
export const { postAdd } = postSlice.actions;

export const getAllPost = (state: RootState) => state.post;
