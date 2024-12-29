// hashPasswordMiddleware.js
const bcrypt = require('bcrypt');

/**
  @desc Hash the user's password before saving it
  @route /hashPassword
  @method Middleware
  @access private
  @etape01 Extracts the password from the request body.
  @etape02 Hashes the password using bcrypt.
  @etape03 Replaces the original password with the hashed password.
  @etape04 Proceeds to the next middleware.
 */

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    next();
  } catch (err) {
    res.status(500).json({message: 'problem server'});
  }
};

module.exports = hashPassword;
