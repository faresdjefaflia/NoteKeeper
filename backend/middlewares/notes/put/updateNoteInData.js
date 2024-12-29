const pool = require('../../../db');
const data = require('../../../db');

module.exports = async (req, res, next) => {
  const idNote = req.params.id;
  const idUser = req.user.user;
  const contentNote = req.body.content;
  console.log(idNote + idUser + contentNote)

  try {
    const update = await data.query('UPDATE notes SET content= ? WHERE id = ? AND user_id = ?', [contentNote, idNote, idUser]);
    const poolNote = await data.query('SELECT * FROM notes WHERE user_id = ?', [idUser]);
    req.notes = poolNote;
    next();
  }
  catch (err) {
    res.status(500).json({message: "problem server"})
  }
}