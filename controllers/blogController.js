const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

//@desc Get all blogs
//@route GET /api/blogs
//@access private
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

//@desc Create New blog
//@route POST /api/blogs
//@access private
const createBlog = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  let blog = req.body;
  blog = await Blog.create( blog );
  console.log("The blog is :", blog);
  res.status(201).json(blog);
});

//@desc Get blog
//@route GET /api/blogs/:id
//@access private
const getBlog = asyncHandler(async (req, res) => {
  try{
      const blog = await Blog.findById(req.params.id);
  }
  catch(err) {
    console.log(err);
    res.status(404);
    throw new Error("Blog not found");
  }
  res.status(200).json(blog);
});

//@desc Update blog
//@route PUT /api/blogs/:id
//@access private
const updateBlog = asyncHandler(async (req, res) => {
    try{
        const blog = await Blog.findById(req.params.id);
    }
    catch(err) {
        console.log(err);
        res.status(404);
        throw new Error("Blog not found");
    }

  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedBlog);
});

//@desc Delete blog
//@route DELETE /api/blogs/:id
//@access private
const deleteBlog = asyncHandler(async (req, res) => {
    try{
    const blog = await Blog.findById(req.params.id);
  }
  catch(err) {
    console.log(err);
    res.status(404);
    throw new Error("Blog not found");
  }
  
  await Blog.deleteOne({ _id: req.params.id });
  res.status(200).json(blog);
});

module.exports = {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};