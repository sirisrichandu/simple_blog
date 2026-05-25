import axios from "axios";

const API = axios.create({
  baseURL: "https://simple-blog-9940.onrender.com/api/blogs"
});

export const getBlogs = () => API.get("/");

export const createBlog = (blogData) =>
  API.post("/", blogData);

export const updateBlog = (id, blogData) =>
  API.put(`/${id}`, blogData);

export const deleteBlog = (id) =>
  API.delete(`/${id}`);

export default API;