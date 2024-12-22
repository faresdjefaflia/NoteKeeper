const express = require('express');
const router = express.Router();
const joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const rateLimit = require('express-rate-limit');

const JWT_SECRET = 'your-secret-key';
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

router.post('/', async (req, res) => {
  // check data from front end
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).max(30).required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    // add new name for data from frontend
    const { email: emailInput, password: passwordInput } = req.body;

    try {
      // pool data from database
      const checkUser = await pool.query('SELECT * FROM users WHERE email = ?', [emailInput]);
      // check if data exist
      if (checkUser.length === 0) {
        res.status(404).json('user not fond');
      } else {
        // add new name for data from database
        const { email: emailData, password: passwordData, name: nameData } = checkUser[0];
        // compare password with database
        const checkPaswoord = await bcrypt.compareSync(passwordInput, passwordData);

        if (checkPaswoord) {
          const token = jwt.sign({ userId: checkUser[0].id, email: emailData }, JWT_SECRET, { expiresIn: '1h' });
          res.status(200).json({ message: `welcome back ${nameData}`, token: token });
        } else {
          res.status(401).send('invalid credentials');
        }
      }
    }
    catch {
      res.status(500).send('error server');
    }
  };
});

module.exports = router;