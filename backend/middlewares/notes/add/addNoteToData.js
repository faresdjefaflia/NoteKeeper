const pool = require('../../../db');

/**
  @desc Insert a new note into the database
  @route /addNote
  @method Middleware
  @access private
  @etape01 Extracts `user_id` and `content` from the request body.
  @etape02 Inserts the note data into the `notes` table in the database.
  @etape03 If insertion is successful, proceeds to the next middleware.
  @etape04 If an error occurs, returns a 500 error with a server issue message.
 */

module.exports = async (req, res, next) => {
  const { content } = req.body;
  const user_id = req.user.user;
  try {
    const addNoteToData = await pool.query('INSERT INTO notes (user_id, content) VALUES (?, ?)', [user_id, content]);
    const poolNotes = await pool.query('SELECT * FROM notes WHERE user_id = ?', [user_id]);
    req.notes = poolNotes;
    next();
  }
  catch (err) {
    res.status(500).json({message: 'sorry problem server'})
  };
};