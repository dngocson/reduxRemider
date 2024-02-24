import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/store";
import { postAdded } from "./postSlice";
import { getAllUsers } from "../users/userSlice";
import { useSelector } from "react-redux";

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const reactions = {
    thumbUps: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0,
  };

  const users = useSelector(getAllUsers);
  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onAuthorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId, reactions));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="author">Author:</label>
        <select onChange={onAuthorChange} id="author" name="author">
          <option value={""}>Select the User</option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button disabled={!canSave} type="button" onClick={onSavePostClicked}>
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
