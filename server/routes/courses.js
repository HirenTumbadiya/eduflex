// routes/courses.js

const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const newCourse = new Course({
      title,
      description,
      price,
      userId: req.userId, // Assuming you have authentication middleware that sets req.userId
    });

    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific course by ID
router.get('/:courseId', async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a specific course by ID
router.put('/:courseId', async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;
    course.price = req.body.price || course.price;

    await course.save();

    res.status(200).json({ message: 'Course updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a specific course by ID
router.delete('/:courseId', async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);

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

// Purchase a course
router.post('/:courseId/purchase', async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
  
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
  
      const newPurchase = new Purchase({
        courseId: req.params.courseId,
        userId: req.userId, // Assuming you have authentication middleware that sets req.userId
      });
  
      const savedPurchase = await newPurchase.save();
  
      res.status(201).json(savedPurchase);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Get all courses purchased by a user
  router.get('/purchased', async (req, res) => {
    try {
      const purchases = await Purchase.find({ userId: req.userId })
        .populate('courseId')
        .select('-userId');
  
      res.status(200).json(purchases);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
