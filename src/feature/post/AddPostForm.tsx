import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../app/store";
import { postAdd } from "./postSlice";

const postSchema = z
  .object({
    title: z.string(),
    content: z.string(),
    password: z.string().min(5).max(10),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password must match",
    path: ["passwordConfirm"],
  });

type postSchemaType = z.infer<typeof postSchema>;

function AddPostForm() {
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
