import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";
import { TaskFormPages } from "./pages/TaskFormPages";
import { Navigation } from "./components/Navigation";
import { SingleTaskPage } from "./pages/SingleTaskPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/task" />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/task-create" element={<TaskFormPages />} />
        <Route path="/task/:id" element={<SingleTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
