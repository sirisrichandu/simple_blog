import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../services/api";

function EditBlog() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "Technology",
    content: ""
  });

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {

    try {

      const res = await API.get(`/${id}`);

      setFormData({
        title: res.data?.title || "",
        author: res.data?.author || "",
        category: res.data?.category || "Technology",
        content: res.data?.content || ""
      });

    } catch (error) {

      console.log("Fetch Error:", error);

      toast.error("Failed to load blog");

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.put(
        `/${id}`,
        formData
      );

      toast.success(
        "Blog Updated Successfully"
      );

      navigate("/");

    } catch (error) {

      console.log("Update Error:", error);

      toast.error(
        "Failed to update blog"
      );

    }

  };

  return (

    <div style={{ padding:"30px" }}>

      <h1>Edit Blog</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br/><br/>

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />

        <br/><br/>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Sports">Sports</option>
          <option value="Food">Food</option>
          <option value="Education">Education</option>
        </select>

        <br/><br/>

        <textarea
          name="content"
          rows="8"
          cols="50"
          value={formData.content}
          onChange={handleChange}
        />

        <br/><br/>

        <button type="submit">
          Update Blog
        </button>

      </form>

    </div>

  );

}

export default EditBlog;