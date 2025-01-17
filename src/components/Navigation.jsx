import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="navigation">
      <Link to="/task">
        <h1> Task App</h1>
      </Link>
      <Link to="/task-create">
        <h1>Create task</h1>
      </Link>
    </div>
  );
}