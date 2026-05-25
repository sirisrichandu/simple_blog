import axios from "axios";

const API = axios.create({
  baseURL: "https://simple-blog-9940.onrender.com/api/blogs"
});

// Get all blogs
export const getBlogs = () => API.get("/");

// Create blog
export const createBlog = (blogData) => API.post("/", blogData);

// Update blog
export const updateBlog = (id, blogData) =>
  API.put(`/${id}`, blogData);

// Delete blog
export const deleteBlog = (id) =>
  API.delete(`/${id}`);

export default API;