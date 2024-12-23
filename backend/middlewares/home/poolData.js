const pool = require('../../db');

/**
  @desc Retrieve user data from the database using the user ID from the JWT token
  @route /poolData
  @method Middleware
  @access private
  @etape01 Extracts the user ID from the JWT token.
  @etape02 Queries the database to fetch user data (name, id) based on the user ID.
  @etape03 Stores the retrieved user data in `req.data`.
  @etape04 Proceeds to the next middleware.
  @etape05 If an error occurs, returns a 500 error.
 */

module.exports = async (req, res, next) => {
  const { user } = req.user;
  try {
    const dataUserFromId = await pool.query('SELECT name, id FROM users WHERE id = ?', [user]);
    req.data = dataUserFromId;
    next();
  }
  catch (err) {
    return res.status(500).send('error');
  };
};