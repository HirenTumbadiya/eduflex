const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
  },
  socialMedia: {
    website: String,
    twitter: String,
    linkedin: String,
    // Add other social media fields as needed
  },
});

module.exports = mongoose.model('Profile', profileSchema);
