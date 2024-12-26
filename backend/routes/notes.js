var express = require('express');
var router = express.Router();

const validateJWT = require('../middlewares/validateJWT');
const validateJOI = require('../middlewares/notes/validateJOI');
const checkUserInData = require('../middlewares/notes/checkUserInData');
const addNoteToData = require('../middlewares/notes/addNoteToData')
/* GET home page. */
// router.get('/', validateJWT, (req, res) => {
//   res.send(req.data);
// });

/**
  @desc Handle note creation process
  @route /notes
  @method POST
  @access private
  @etape01 Validates the JWT token to ensure the user is authenticated.
  @etape02 Checks if the user exists in the database.
  @etape03 Validates the request body using Joi schema.
  @etape04 Adds the note to the database.
  @etape05 If all steps are successful, responds with a success message.
  @etape06 If any step fails, appropriate error handling will occur in the middleware.
 */

router.post('/', validateJWT, checkUserInData, validateJOI, addNoteToData, (req, res) => {
  res.status(200).send('thanks, the note is save');
});

module.exports = router;
