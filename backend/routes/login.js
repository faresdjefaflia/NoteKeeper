const express = require('express');
const router = express.Router();

const validateReq = require('../middlewares/login/validateUserMiddleware');
const checkUserInData = require('../middlewares/login/checkUserInData');
const checkPassword = require('../middlewares/login/checkPassword');
const createSession = require('../middlewares/login/createSession');


/**
  @desc User Login Endpoint
  @route /login
  @method POST
  @access public
  @etape01 Applies rate limiting (max 5 attempts in 15 minutes) to prevent brute-force attacks.
  @etape02Validates user input using Joi for: @validateReq
 *    - Email: Valid email format, required.
 *    - Password: Min 3, Max 30 characters, required.
  @etape03 Checks if the email exists in the database. @checkUserInData
  @etape04 Compares the entered password with the stored hashed password using bcrypt. @checkPassword
  @etape05 If valid, generates a JWT token for user authentication. @createSession
  @etape06 Returns data
 */


router.post('/',validateReq, checkUserInData, checkPassword, createSession, (req, res) => {
  res.json({
    dataUser: req.poolUser,
    token: req.token
  });
});

module.exports = router;