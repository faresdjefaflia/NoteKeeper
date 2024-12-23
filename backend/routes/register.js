const express = require('express');
const router = express.Router();
const validateUser = require('../middlewares/register/validateUserMiddleware');
const checkUserExists = require('../middlewares/register/checkUserExistsMiddleware');
const hashPassword = require('../middlewares/register/hashPasswordMiddleware');
const insertUser = require('../middlewares/register/insertUserMiddleware');


/**
  @desc User Registration Endpoint
  @route /register
  @method POST
  @access public
  @etape01 Validates user input (email, password, etc.) using middleware. @validateUser
  @etape02 Checks if the user already exists in the database. @checkUserExists
  @etape03 Hashes the user's password before storing it. @hashPassword
  @etape04 Inserts the new user into the database. @insertUser
 */

router.post('/', validateUser, checkUserExists, hashPassword, insertUser);

module.exports = router;
