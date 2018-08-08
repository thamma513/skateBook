const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');

const validateLogInInput = require('../../validation/login');

const User = require('../../models/User');


//GET ROUTE
//Test

router.get('/test', (req, res) => res.json({
  msg: `Users Works`
}));

// POST ROUTE
//api/users/register
//Public
router.post('./register', (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);

  // CHECK VALIDATION
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email
  }).then(user)
})