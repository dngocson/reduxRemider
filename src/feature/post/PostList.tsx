import { useSelector } from "react-redux";
import { getAllPost } from "./postSlice";

function PostList() {
  const posts = useSelector(getAllPost);

  const renderPost = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return <section>{renderPost}</section>;
}

export default PostList;
