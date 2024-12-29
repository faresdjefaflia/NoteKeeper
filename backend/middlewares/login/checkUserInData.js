const pool = require('../../db');

/**
  @desc Check if the user exists in the database by email
  @route /checkUserInData
  @method Middleware
  @access private
  @etape01 Extracts the email from the request body.
  @etape02 Queries the database to find the user by email.
  @etape03 If the user is not found, returns a 400 error with a "User not found" message.
  @etape04 If the user is found, stores the user data in `req.poolUser`.
  @etape05 Proceeds to the next middleware.
 */

module.exports = async (req, res, next) => {
  const { email } = req.body;
  try {
    const poolUser = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (poolUser.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    };
    req.poolUser = poolUser;
  }
  catch (err) {
    res.status(400).json({message: 'problem server'});
  }
  
  next();
};