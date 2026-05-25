import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function CreateBlog() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "Technology",
    content: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    try {

      await API.post("/", formData);

      toast.success(
        "Blog Created Successfully"
      );

      navigate("/");

    } catch(error) {

      console.log(error.response?.data);

      toast.error(
        "Failed to create blog"
      );

    }

  };

  return (

    <div style={{
      padding:"30px"
    }}>

      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Enter title"
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

          <option value="Technology">
            Technology
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Sports">
            Sports
          </option>

          <option value="Food">
            Food
          </option>

          <option value="Education">
            Education
          </option>

        </select>

        <br/><br/>

        <textarea
          name="content"
          placeholder="Write content"
          rows="8"
          cols="50"
          value={formData.content}
          onChange={handleChange}
        />

        <br/><br/>

        <p>
          Characters: {formData.content.length}
        </p>

        <button type="submit">
          Create Blog
        </button>

      </form>

    </div>

  );

}

export default CreateBlog;