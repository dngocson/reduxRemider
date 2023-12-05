import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppDispatch } from "../../app/store";
import { postAdd } from "./postSlice";
import { useSelector } from "react-redux";
import { selectAllUser } from "../users/userSlice";

const postSchema = z
  .object({
    title: z.string().min(1),
    content: z.string().min(1),
    name: z.string().min(1),
    password: z.string().min(5).max(10),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password must match",
    path: ["passwordConfirm"],
  });

type postSchemaType = z.infer<typeof postSchema>;

function AddPostForm() {
  const users = useSelector(selectAllUser);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<postSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = function (data: postSchemaType) {
    // Can add many parameter to action.payload => construc with prepare
    // dispatch(postAdd(data.title,data.content));

    dispatch(postAdd(data));

    reset();
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input {...register("title")} type="text" />
        <label>Content</label>
        <input {...register("content")} type="text" />
        <label>User</label>
        <select {...register("name")}>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <br />
        <p>Testing form validation with zod</p>
        <label>password</label>
        <input {...register("password")} type="text" />
        {errors?.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <label>Password confirm</label>
        <input {...register("passwordConfirm")} type="text" />
        {errors?.passwordConfirm && (
          <p style={{ color: "red" }}>{errors.passwordConfirm.message}</p>
        )}
        <button>submit</button>
      </form>
    </section>
  );
}

export default AddPostForm;
