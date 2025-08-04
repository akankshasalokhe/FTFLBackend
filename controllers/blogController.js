const Blog = require('../models/blogModel.js');

// CREATE BLOG
exports.createBlog = async (req, res) => {
  try {
    const { title, description, headings, items } = req.body;

    const newBlog = new Blog({
      title,
      description,
      headings: JSON.parse(headings || '[]'),
      items: JSON.parse(items || '[]'),
      image: req.files?.image?.[0]?.path || '',
      headingImage: req.files?.headingImage?.[0]?.path || ''
    });

    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

// GET ALL BLOGS
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, headings, items } = req.body;

    const updatedData = {
      title,
      description,
      headings: JSON.parse(headings || '[]'),
      items: JSON.parse(items || '[]')
    };

    if (req.files?.image?.[0]) {
      updatedData.image = req.files.image[0].path;
    }

    if (req.files?.headingImage?.[0]) {
      updatedData.headingImage = req.files.headingImage[0].path;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, { new: true });

    res.json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update blog' });
  }
};


// DELETE BLOG
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};
exports.getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch blog' });
    }
}