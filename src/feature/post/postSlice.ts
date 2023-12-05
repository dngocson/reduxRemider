import {
  createSlice,
  nanoid,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
export type PostItem = {
  id: string;
  title: string;
  body: string;
  date: string;
  userId: string;
};

type Post = {
  posts: PostItem[];
  status: string;
  error: string | null;
};

const initialState: Post = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("/post/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
    return "An error occurred";
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdd: {
      reducer(state, action: PayloadAction<PostItem>) {
        state.posts.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            date: sub(new Date(), { minutes: 5 }).toISOString(),
            title: data.title,
            body: data.content,
            userId: nanoid(),
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = " loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          let min = 1;
          const loadedPosts = action.payload.map((post: PostItem) => {
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
            return post;
          });

          state.posts = state.posts.concat(loadedPosts);
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "false";
        state.error = action.error.message || null;
      });
  },
});

export default postSlice.reducer;
export const { postAdd } = postSlice.actions;

export const getAllPost = (state: RootState) => state.posts.posts;
export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;
