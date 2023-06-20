// models/Purchase.js

const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Purchase', purchaseSchema);
