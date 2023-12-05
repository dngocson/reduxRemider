import { useSelector } from "react-redux";
import { getAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

function PostList() {
  const posts = useSelector(getAllPost);

  const renderPost = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        author :<PostAuthor userId={post?.user?.userId || undefined} />
      </p>
      <TimeAgo timestamp={post.date} />
    </article>
  ));

  return <section>{renderPost}</section>;
}

export default PostList;
