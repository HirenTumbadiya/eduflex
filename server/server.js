const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const workshopRoutes = require('./routes/workshops');
const blogPostRoutes = require('./routes/blogPosts'); 


// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Enable CORS for all routes
app.use(cors());

  // Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workshops', workshopRoutes);
app.use('/api/blogposts', blogPostRoutes);
app.use('/api/admin', adminRoutes); 

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});