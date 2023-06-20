// routes/blogPosts.js

const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new blog post
router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const blogPost = new BlogPost({
      title,
      content,
      author,
    });

    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific blog post
router.get('/:blogPostId', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.blogPostId);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a blog post
router.put('/:blogPostId', async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const blogPost = await BlogPost.findByIdAndUpdate(
      req.params.blogPostId,
      { title, content, author },
      { new: true }
    );

    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a blog post
router.delete('/:blogPostId', async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.blogPostId);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
