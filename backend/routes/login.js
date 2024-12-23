const express = require('express');
const router = express.Router();

const validateReq = require('../middlewares/login/validateUserMiddleware');
const checkUserInData = require('../middlewares/login/checkUserInData');
const checkPasswordInData = require('../middlewares/login/checkPassword');
const createSession = require('../middlewares/login/createSession');


// const joi = require('joi');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const pool = require('../db');
// const JWT_SECRET = 'your-secret-key';

/**
 * User Login Endpoint
 * 
 * 1. Applies rate limiting (max 5 attempts in 15 minutes) to prevent brute-force attacks.
 * 2. Validates user input using Joi for:
 *    - Email: Valid email format, required.
 *    - Password: Min 3, Max 30 characters, required.
 * 3. Checks if the email exists in the database.
 * 4. Compares the entered password with the stored hashed password using bcrypt.
 * 5. If valid, generates a JWT token for user authentication.
 * 6. Returns appropriate responses for success or errors.
 */

router.post('/',validateReq, checkUserInData, checkPasswordInData, createSession, (req, res) => {
  res.json({
    dataUser: req.poolUser,
    token: req.token
  });
});

module.exports = router;