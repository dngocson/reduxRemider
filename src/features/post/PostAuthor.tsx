import { useSelector } from "react-redux";
import { getAllUsers } from "../users/userSlice";

const PostAuthor = ({ userId }: { userId: string }) => {
  const users = useSelector(getAllUsers);
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "unknow author"}</span>;
};

export default PostAuthor;
