import axios from "axios";

const api = axios.create({
  baseURL: "https://assignment-todolist-api.vercel.app/api/",
});

export default api;
