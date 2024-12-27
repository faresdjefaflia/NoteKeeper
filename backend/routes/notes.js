var express = require('express');
var router = express.Router();

//show all notes
const validateJoiForUpdate = require('../middlewares/notes/get/validateJoiForUpdate');
const poolNotesFromData = require('../middlewares/notes/get/poolNotesFromData');

//add notes
const validateJWT = require('../middlewares/validateJWT');
const validateJoiForAdd = require('../middlewares/notes/add/validateJoiForAdd');
const checkUserInData = require('../middlewares/notes/checkUserInData');
const addNoteToData = require('../middlewares/notes/add/addNoteToData')
/*********/

/* GET all notes. */
router.get('/', validateJWT, validateJoiForUpdate, checkUserInData, poolNotesFromData, (req, res) => {
  res.status(200).json(req.notes)
});



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

router.post('/', validateJWT, validateJoiForAdd, checkUserInData, addNoteToData, (req, res) => {
  res.status(200).send('thanks, the note is save');
});

router.put('/', (req, res) => {
  res.status(200).send('the note is update')
})

module.exports = router;
