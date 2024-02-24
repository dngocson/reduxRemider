import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";

type Reaction = {
  thumbUps: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
};

export type ReactionString = "thumbUps" | "wow" | "heart" | "rocket" | "coffee";
export type PostType = {
  title: string;
  content: string;
  id: string;
  userId: string;
  date: string;
  reactions: Reaction;
};

const initialState = [
  {
    id: "1",
    title: "someBook",
    content: "booring",
    userId: "15",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbUps: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "someBook1",
    content: "booring1",
    userId: "15",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions: {
      thumbUps: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<PostType>) {
        state.push(action.payload);
      },
      prepare(title, content, userId, reactions) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions,
          },
        };
      },
    },
    reactionAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionString }>
    ) {
      const { postId, reaction } = action.payload;
      console.log("reaction", reaction);
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export default postSlice.reducer;

export const { postAdded, reactionAdded } = postSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts;
