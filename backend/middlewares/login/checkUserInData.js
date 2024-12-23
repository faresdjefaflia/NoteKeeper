const pool = require('../../db');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  try {
    const poolUser = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (poolUser.length === 0) {
      return res.status(400).send('User not found');
    };
    req.poolUser = poolUser;
  }
  catch (err) {
    res.status(400).send('error');
  }
  
  next();
};