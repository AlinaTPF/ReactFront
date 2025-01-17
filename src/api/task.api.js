import axios from "axios";

const tasksApi = axios.create({
  baseURL: "https://djangoback-q83s.onrender.com/task/api/v1/tasks/",
});

export const getAllTasks = () => tasksApi.get("/");
export const getTask = (id) => tasksApi.get(`/${id}`);
export const deleteTask = (id) => tasksApi.delete(`/${id}/`);
export const createTask = (task) => tasksApi.post("/", task);
