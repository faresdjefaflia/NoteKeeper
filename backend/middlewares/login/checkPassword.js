const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  const { password: passwordData } = req.poolUser[0];
  const { password: passwordInput } = req.body;
  try {
    const checkPassword = await bcrypt.compare(passwordInput, passwordData);
    if (checkPassword) {
      next();
    } else {
      return res.status(400).json({ message: 'sorry you cant loin now' });
    }
  }
  catch (err) {
    return res.status(500).send('error')
  }
};