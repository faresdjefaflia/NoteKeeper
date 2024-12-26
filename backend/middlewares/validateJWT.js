const jwt = require('jsonwebtoken');
const JWT_SECRET = 'frs99';

/**
  @desc Validate the JWT token from the request header
  @route /validateJWT
  @method Middleware
  @access private
  @etape01 Extracts the token from the `Authorization` header.
  @etape02 If the token is missing, returns a 400 error with a login message.
  @etape03 Verifies the token using the secret key.
  @etape04 If the token is invalid, returns a 400 error with a login message.
  @etape05 If the token is valid, stores the user data in `req.user` and proceeds to the next middleware.
 */

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(400).json({ message: 'please you need to login' });
  } else {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: 'please you need to login' });
      }
      req.user = user;
      next();
    })
  };
};