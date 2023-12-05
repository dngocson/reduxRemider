import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import PostExcerpts from "./PostExcerpts";
import {
  fetchPosts,
  getAllPost,
  // getPostsError,
  getPostsStatus,
} from "./postSlice";

function PostList() {
  const dispatch = useAppDispatch();
  const posts = useSelector(getAllPost);
  const postsStatus = useSelector(getPostsStatus);
  // const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  return (
    <section>
      {posts.map((post) => (
        <PostExcerpts key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
