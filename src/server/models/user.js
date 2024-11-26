// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  topics: {
    type: [String],
    default: [],
  },
  skills: {
    type: [String],
    default: [],
  },
  resume: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Custom method to compare the provided password with the stored hashed password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password); // Compare the password with the hashed password
};

// Pre-save hook to hash the password before saving to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // Hash the password
  }
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
