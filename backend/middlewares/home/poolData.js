const pool = require('../../db');

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