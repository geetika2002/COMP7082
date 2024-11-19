const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables from .env file
const userRoute = require('./routes/userRoutes.js'); // Importing the route file

const app = express();
const port = 6000; // Server port

// Get MongoDB URI from .env file
const mongoURI = process.env.MONGO_URI;

// Middleware to parse incoming JSON requests
app.use(express.json());



// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if MongoDB connection fails
  });

// Use routes
app.use('/users', userRoute); // Mount the user routes under '/users'

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
