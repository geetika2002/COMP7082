// models/User.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // First name is required
  },
  lastname: {
    type: String,
    required: true,  // Last name is required
  },
  email: {
    type: String,
    required: true,  // Email is required
    unique: true,    // Ensures email is unique
    lowercase: true, // Normalize to lowercase
    trim: true,      // Removes leading and trailing whitespaces
  },
  topics: {
    type: [String],  // Array of strings to store topics of interest
    default: [],     // Default to an empty array if no topics are provided
  },
  skills: {
    type: [String],  // Array of strings to store skills
    default: [],     // Default to an empty array if no skills are provided
  },
  resume: {
    type: String,    // You could store a URL or file path here
    required: true,  // Resume is required
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set to the current date
  },
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;