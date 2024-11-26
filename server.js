const express = require('express');
const cors = require('cors');  // Import cors
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables from .env file
const userRoute = require('./src/server/routes/userRoutes.js'); // Importing the route file

const app = express();

// Allow CORS from your frontend's origin (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000',  // Allow only your frontend to access the backend
  methods: ['GET', 'POST', 'PUT'],  // Allow specific methods including PUT
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
  credentials: true,  // Allow credentials (e.g., cookies, HTTP authentication)
}));

const port = 4000; // Server port

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
