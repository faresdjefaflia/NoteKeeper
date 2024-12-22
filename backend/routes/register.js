const express = require('express');
const router = express.Router();
const pool = require('../db');
const joi = require('joi');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many registration attempts. Please try again later.'
});

/* *********************** */
/**
 * User Registration Endpoint
 * 
 * 1. Applies rate limiting (max 5 attempts in 15 minutes) to prevent abuse.
 * 2. Validates user input using Joi for:
 *    - Name: Min 3, Max 30 characters, required.
 *    - Email: Valid email format, required.
 *    - Password: Min 3, Max 30 characters, required.
 * 3. Checks if the email already exists in the database.
 * 4. Hashes the password using bcrypt for secure storage.
 * 5. Inserts the new user into the database if all checks pass.
 * 6. Returns appropriate responses for success or errors.
 */
/* *********************** */

router.post('/',registerLimiter, async (req, res) => {
  const schema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).max(30).required()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    const { name, email, password } = req.body;

    const verifUser = await pool.query('SELECT email FROM users WHERE email = ?', [email]);
    if (verifUser.length > 0) {
      return res.status(400).send('User already exists');
    } else {
      try {
        const hash = await bcrypt.hash(password, 10); 
        const register = await pool.query('INSERT INTO users ( name, email, password) VALUES (?, ?, ?)', [name, email, hash]);
        res.status(200).send(`User ${name} registered successfully!`);
      }
      catch (err) {
        res.status(500).send('Error during registration');
      };
    }
  }
});


module.exports = router;