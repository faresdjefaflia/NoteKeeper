const pool = require('../../db');

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
  const { user_id, content } = req.body;
  try {
    const addNoteToData = await pool.query('INSERT INTO notes (user_id, content) VALUES (?, ?)', [user_id, content]);
    next();
  }
  catch (err) {
    res.status(500).send('sorry problem server')
  };
};