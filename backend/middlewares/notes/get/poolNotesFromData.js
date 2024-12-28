const pool = require('../../../db');

module.exports = async (req, res, next) => {
  const user_id  = req.user.user;
  try {
    const poolNotes = await pool.query('SELECT id, content FROM notes WHERE user_id = ?', [user_id]);
    req.notes = poolNotes;
    next()
  }
  catch (err) {
    res.status(500).send('server problem');
  };
};