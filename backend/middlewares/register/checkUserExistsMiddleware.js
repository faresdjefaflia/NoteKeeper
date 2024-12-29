// checkUserExistsMiddleware.js
const pool = require('../../db');

/**
  @desc Check if the user already exists in the database
  @route /checkUserExists
  @method Middleware
  @access private
  @etape01 Extracts the email from the request body. 
  @etape02 Queries the database to check if the email is already registered.
  @etape03 If the email exists, returns an error response.
  @etape04 If the email doesn't exist, proceeds to the next middleware.
 */

const checkUserExists = async (req, res, next) => {
  const { email } = req.body;
  try {
    const verifUser = await pool.query('SELECT email FROM users WHERE email = ?', [email]);
    if (verifUser.length > 0) {
      return res.status(400).json({message: 'User already exists'});
    }
    next(); 
  } catch (err) {
    res.status(500).json({message: 'problem server'});
  }
};

module.exports = checkUserExists;
