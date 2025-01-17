import { useForm } from "react-hook-form";
import { createTask } from "../api/task.api";
import { useNavigate } from "react-router-dom";

export function TaskFormPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    await createTask(data)
    navigate('/')
  }); 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Required</span>}
        <textarea
          name="body"
          rows="3"
          placeholder="Desc"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>Required</span>}
        <button>Save</button>
      </form>
    </div>
  );
}
