// routes/admin.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Courses');
const BlogPost = require('../models/BlogPost');
const Workshop = require('../models/Workshop');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new course
router.post('/courses', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCourse = new Course({ title, description });
    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a course
router.put('/courses/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { title, description } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    course.title = title || course.title;
    course.description = description || course.description;

    await course.save();

    res.status(200).json({ message: 'Course updated successfully', course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a course
router.delete('/courses/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    await course.remove();

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all blog posts
router.get('/blog-posts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new blog post
router.post('/blog-posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlogPost = new BlogPost({ title, content });
    await newBlogPost.save();
    res.status(201).json({ message: 'Blog post created successfully', blogPost: newBlogPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a blog post
router.put('/blog-posts/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, content } = req.body;

    const blogPost = await BlogPost.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    blogPost.title = title || blogPost.title;
    blogPost.content = content || blogPost.content;

    await blogPost.save();

    res.status(200).json({ message: 'Blog post updated successfully', blogPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a blog post
router.delete('/blog-posts/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;

    const blogPost = await BlogPost.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    await blogPost.remove();

    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all workshops
router.get('/workshops', async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.status(200).json(workshops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new workshop
router.post('/workshops', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newWorkshop = new Workshop({ title, description });
    await newWorkshop.save();
    res.status(201).json({ message: 'Workshop created successfully', workshop: newWorkshop });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a workshop
router.put('/workshops/:workshopId', async (req, res) => {
  try {
    const workshopId = req.params.workshopId;
    const { title, description } = req.body;

    const workshop = await Workshop.findById(workshopId);
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }

    workshop.title = title || workshop.title;
    workshop.description = description || workshop.description;

    await workshop.save();

    res.status(200).json({ message: 'Workshop updated successfully', workshop });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a workshop
router.delete('/workshops/:workshopId', async (req, res) => {
  try {
    const workshopId = req.params.workshopId;

    const workshop = await Workshop.findById(workshopId);
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }

    await workshop.remove();

    res.status(200).json({ message: 'Workshop deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
