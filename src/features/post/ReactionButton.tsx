import { useAppDispatch } from "../../app/store";
import { PostType, ReactionString, reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbUps: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }: { post: PostType }) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(
            reactionAdded({ postId: post.id, reaction: name as ReactionString })
          )
        }
      >
        {emoji} {post.reactions[name as ReactionString]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
