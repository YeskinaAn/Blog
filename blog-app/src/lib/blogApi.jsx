import axios from "axios";

export const DEFAULT_ERROR_MESSAGE = "Oops, something went wrong";
export const DEFAULT_SAVED_MESSAGE = "Changes have been saved";

export const privateBlogApi = axios.create({
  baseURL: "http://localhost:8080/api/posts",
});
const token = localStorage.getItem("token");

privateBlogApi.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  },
}));
