const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const Profile = require('../models/Profile');
const User = require('../models/User');

// Get user profile by user ID
router.get('/:userId', authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId }).populate('user', 'name email');
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile by user ID
router.put('/:userId', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { bio, socialMedia } = req.body;

    const profile = await Profile.findOne({ user: req.params.userId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    profile.bio = bio;
    profile.socialMedia = socialMedia;

    await profile.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile picture by user ID
router.put('/:userId/avatar', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    profile.avatar = req.body.avatar;

    await profile.save();
    res.json({ message: 'Profile picture updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
