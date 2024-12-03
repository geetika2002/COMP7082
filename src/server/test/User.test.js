// Polyfill for TextEncoder if you're using an older version of Node.js
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Adjust path as needed
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('User Model Tests', () => {
  it('should hash password before saving to the database', async () => {
    const user = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      resume: 'resume_url',
    });

    // Save the user
    await user.save();

    // Retrieve the user
    const foundUser = await User.findOne({ email: 'john.doe@example.com' });

    // Debugging: log the foundUser object
    console.log('Found User:', foundUser);

    // Ensure foundUser exists
    expect(foundUser).not.toBeNull();

    // Ensure the password is hashed
    expect(foundUser.password).not.toBe('password123');
    expect(await bcrypt.compare('password123', foundUser.password)).toBe(true);
  });

  it('should compare password correctly', async () => {
    const password = 'password123';
    const user = new User({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      password,
      resume: 'resume_url',
    });

    // Save the user
    await user.save();

    // Retrieve the user
    const foundUser = await User.findOne({ email: 'jane.doe@example.com' });

    // Debugging: log the foundUser object
    console.log('Found User for Compare:', foundUser);

    // Ensure foundUser exists
    expect(foundUser).not.toBeNull();

    // Compare password
    const isMatch = await foundUser.comparePassword(password);
    expect(isMatch).toBe(true);

    const isWrongMatch = await foundUser.comparePassword('wrongPassword');
    expect(isWrongMatch).toBe(false);
  });

  it('should not save a user with a duplicate email', async () => {
    const userData = {
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password123',
      resume: 'resume_url',
    };

    // Save the first user
    await new User(userData).save();

    // Try to save another user with the same email
    try {
      await new User(userData).save();
    } catch (err) {
      // Expect error due to duplicate email
      expect(err.code).toBe(11000); // MongoDB duplicate key error code
    }
  });

  it('should set the default value for topics and skills fields', async () => {
    const userData = {
      firstName: 'Mark',
      lastName: 'Johnson',
      email: 'mark.johnson@example.com',
      password: 'password123',
      resume: 'resume_url',
    };

    // Create user without providing topics and skills
    const user = new User(userData);

    // Save user to the database
    await user.save();

    // Fetch the saved user
    const savedUser = await User.findOne({ email: 'mark.johnson@example.com' });

    // Log the saved user for debugging
    console.log(savedUser); // Log the saved user to inspect the fields

    // Ensure that savedUser is not undefined and that topics and skills are set to default values
    expect(savedUser).not.toBeNull(); // Check that the saved user is not null
    expect(savedUser.topics).toEqual([]);  // Should be an empty array
    expect(savedUser.skills).toEqual([]);  // Should be an empty array
  });
});
