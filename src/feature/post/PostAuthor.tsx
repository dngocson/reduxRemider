import { useSelector } from "react-redux";
import { selectAllUser } from "../users/userSlice";

export default function PostAuthor({ userId }: { userId?: string }) {
  const users = useSelector(selectAllUser);
  const author = users.find((user) => user.id === userId);
  return <span>{author ? author.name : "unknow user"}</span>;
}
