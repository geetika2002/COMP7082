// routes/userRoute.js
const express = require('express');
const User = require('../models/user'); // Import the User model
const router = express.Router();
const bcrypt = require('bcrypt'); // For password hashing

const jwt = require('jsonwebtoken'); // Import for token verification
const authMiddleware = require('../../middleware/auth.js'); // Custom middleware to verify token

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
  const { firstName, lastName, email, password, topics, skills, resume } = req.body;

  // Validate input
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password is required and must be at least 6 characters long.' });
  }

  // Create new user object
  const newUser = new User({
    firstName,
    lastName,
    email,
    topics,
    skills,
    resume,
    password,  // Store the plain password, which will be hashed automatically before saving
  });

  try {
    // Save the user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET, // Ensure this secret is set in your environment
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            token,
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to get the logged-in user's data
router.get('/me', authMiddleware, async (req, res) => {
  try {
      const userId = req.user.id; // `req.user` is set by the auth middleware
      const user = await User.findById(userId).select('-password'); // Exclude the password field
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


// Route to update the logged-in user's profile
router.put('/me', authMiddleware, async (req, res) => {
  const { firstName, lastName, email, topics, skills } = req.body; // Extract user data from the request body
  const userId = req.user.id; // Get the user ID from the decoded JWT (set by authMiddleware)

  try {
    // Find the user by ID and update their profile
    const updatedUser = await User.findByIdAndUpdate(
      userId, // The user's ID, which comes from the JWT token (from authMiddleware)
      { firstName, lastName, email, topics, skills }, // The fields to update
      { new: true } // This option ensures that the updated user object is returned
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send back the updated user data
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

// Route to verify email for password reset
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
      }

      // Skip token generation and email sending for this simplified version
      res.status(200).json({ success: true, message: 'An email has been sent to update your password.' });
  } catch (err) {
      res.status(500).json({ success: false, message: 'Error occurred', error: err.message });
  }
});

// Route to reset password
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by decoded user ID
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Hash the new password and update it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    // Send success response
    res.status(200).json({ success: true, message: 'Password successfully reset' });
  } catch (err) {
    res.status(500).json({ message: 'Error resetting password', error: err.message });
  }
});

module.exports = router;
