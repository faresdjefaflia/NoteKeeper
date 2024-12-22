const express = require('express');
const router = express.Router();
const validateUser = require('../middlewares/register/validateUserMiddleware');
const checkUserExists = require('../middlewares/register/checkUserExistsMiddleware');
const hashPassword = require('../middlewares/register/hashPasswordMiddleware');
const insertUser = require('../middlewares/register/insertUserMiddleware');



router.post('/', 
  validateUser, 
  checkUserExists, 
  hashPassword, 
  insertUser
);

module.exports = router;
