const Blog = require("../models/Blog");


// Create Blog
const createBlog = async (req, res) => {
  try {

    const {
 title,
 author,
 category,
 content
} = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and Content are required"
      });
    }

    const newBlog = await Blog.create({
title,
author,
category,
content
});

    res.status(201).json(newBlog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// Get All Blogs
const getBlogs = async (req, res) => {

  try {

    const blogs = await Blog.find().sort({
      createdAt: -1
    });

    res.status(200).json(blogs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// Get Single Blog
const getBlogById = async (req, res) => {

  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found"
      });
    }

    res.status(200).json(blog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// Update Blog
const updateBlog = async (req, res) => {

  try {

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        message: "Blog not found"
      });
    }

    res.status(200).json(updatedBlog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// Delete Blog
const deleteBlog = async (req, res) => {

  try {

    const deletedBlog = await Blog.findByIdAndDelete(
      req.params.id
    );

    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog not found"
      });
    }

    res.status(200).json({
      message: "Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};