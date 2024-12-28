const data = require('../../../db');

module.exports = async (req, res, next) => {
  const user_id = req.user.user;
  const idNote = req.params.id;
  try {
    const deleteNote = await data.query('DELETE FROM notes WHERE id = ? AND user_id = ?', [idNote, user_id]);
    const poolNotes = await data.query('SELECT * FROM notes WHERE user_id = ?', [user_id]);
    req.notes = poolNotes;
    next();
  }
  catch (err) {
    res.status(500).json({ message: 'problem server' })
  };
};