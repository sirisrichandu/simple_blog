import axios from "axios";

const API = axios.create({
    baseURL:"https://simple-blog-9940.onrender.com/api/blogs"
});

export default API;