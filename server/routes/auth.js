const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');

// User registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, username } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// User login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
      }

      // Check if user is an admin
      if (user.role !== 'admin') {
        return res.status(403).json({ error: 'Not authorized' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h', // Set an expiration time for the token if desired
      });

      res.status(200).json({ token, userId: user._id });
    });
  })(req, res, next);
});

module.exports = router;
