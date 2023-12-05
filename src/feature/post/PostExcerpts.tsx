import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { PostItem } from "./postSlice";

function PostExcerpts({ post }: { post: PostItem }) {
  console.log("post", post);
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        author :<PostAuthor userId={post?.userId || undefined} />
      </p>
      <TimeAgo timestamp={post.date} />
    </article>
  );
}

export default PostExcerpts;
