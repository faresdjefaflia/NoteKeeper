const jwt = require('jsonwebtoken');

/**
  @desc Generate a JWT token for user authentication
  @route /createSession
  @method Middleware
  @access private
  @etape01 Generates a JWT token using the user's ID and a secret key.
  @etape02 Sets the token expiration to 1 hour.
  @etape03 Stores the generated token in `req.token`.
  @etape04 Proceeds to the next middleware.
 */

const JWT_SECRET = 'frs99';

module.exports = (req, res, next) => {
  const token = jwt.sign({ user: req.poolUser[0].id }, JWT_SECRET, { expiresIn: '9999h' });
  req.token = token
  next();
}