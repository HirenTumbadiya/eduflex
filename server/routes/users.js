// routes/dashboard.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Courses');

// Get dashboard data
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch user profile
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Fetch courses for the user
    const courses = await Course.find({ userId });

    // Combine user profile and courses data
    const dashboardData = {
      user,
      courses,
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile
router.put('/profile/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    await user.save();

    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
