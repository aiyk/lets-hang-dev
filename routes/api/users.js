const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    errors.email = 'Email already exists';
    return res.status(400).json(errors);
  } else {
    const avatar = gravatar.url(req.body.email, {
      s: '200', // Size
      r: 'pg', // Rating
      d: 'mm' // Default
    });

    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      avatar,
      private: req.body.private
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        console.log(newUser);
        const user = await newUser.save();
        res.send(user);
      });
    });
  }
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  const user = await User.findOne({ email });

  // Check for user
  if (!user) {
    errors.email = 'User not found';
    return res.status(404).json(errors);
  }

  // Check Password
  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    // User Matched
    const payload = { id: user.id, firstname: user.firstname, lastname: user.lastname, avatar: user.avatar }; // Create JWT Payload
    
    // Sign Token
    jwt.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: 3600 },
      (err, token) => {
        res.json({
          success: true,
          token: 'Bearer ' + token
        });
      }
    );
  } else {
    errors.password = 'Password incorrect';
    return res.status(400).json(errors);
  }
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
