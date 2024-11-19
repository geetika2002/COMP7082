const express = require('express');
const User = require('../models/user'); // Import the User model
const router = express.Router();

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) { 
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new user
router.post('/', async (req, res) => {
  const { firstName, lastName, email, topics, skills, resume } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    email,
    topics,
    skills,
    resume,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;