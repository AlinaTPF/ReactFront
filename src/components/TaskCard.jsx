import { Link } from "react-router-dom";

export function TaskCard({ task }) {
  return (
    <Link to={`/task/${task.id}`}>
      <div className="card-task">
        <h1>Title: {task.title}</h1>
        <p>Des: {task.description}</p>
      </div>
    </Link>
  );
}
