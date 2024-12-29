const bcrypt = require('bcrypt');

/**
  @desc Compare the entered password with the stored hashed password
  @route /checkPassword
  @method Middleware
  @access private
  @etape01 Extracts the stored hashed password and the entered password from the request.
  @etape02 Compares the entered password with the stored password using bcrypt.
  @etape03 If the passwords match, proceeds to the next middleware.
  @etape04 If the passwords don't match, returns a 400 error with a message.
  @etape05 If an error occurs, returns a 500 error.
 */

module.exports = async (req, res, next) => {
  const { password: passwordData } = req.poolUser[0];
  const { password: passwordInput } = req.body;
  try {
    const checkPassword = await bcrypt.compare(passwordInput, passwordData);
    if (checkPassword) {
      next();
    } else {
      return res.status(400).json({ message: 'sorry you cant login now' });
    }
  }
  catch (err) {
    return res.status(500).json({message: 'problem server'})
  }
};