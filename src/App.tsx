import AddPostForm from "./feature/post/AddPostForm";
import PostList from "./feature/post/PostList";

function App() {
  return (
    <div className="container">
      <PostList />
      <AddPostForm />
    </div>
  );
}

export default App;
