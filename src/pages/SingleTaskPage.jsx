import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteTask, getTask } from "../api/task.api";

export function SingleTaskPage() {
  const params = useParams();
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function loadTasks() {
      const res = await getTask(params.id);
      setTask(res.data);
      console.log(task);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button
        onClick={async () => {
          const accepted = window.confirm("U SURE?");
          if (accepted) {
            await deleteTask(params.id);
            navigate("/");
          }
        }}
      >
        Delete
      </button>
    </div>
  );
}
