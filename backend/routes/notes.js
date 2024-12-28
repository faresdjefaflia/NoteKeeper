var express = require('express');
var router = express.Router();

const validateJWT = require('../middlewares/validateJWT');


//show all notes GET
const poolNotesFromData = require('../middlewares/notes/get/poolNotesFromData');
/*********/

//add notes POST
const validateJoiForAdd = require('../middlewares/notes/add/validateJoiForAdd');
const checkUserInData = require('../middlewares/notes/checkUserInData');
const addNoteToData = require('../middlewares/notes/add/addNoteToData');
/*********/

// update notes PUT
const validateJoiForUpdate = require('../middlewares/notes/put/validateJoiForUpdate');
const updateNoteInData = require('../middlewares/notes/put/updateNoteInData');
/*********/


/**
  @desc Retrieve user notes from the database
  @route /notes
  @method GET
  @access private
  @etape01 Validates the JWT token to authenticate the user.
  @etape02 Confirms the existence of the user in the database.
  @etape03 Fetches all notes associated with the user from the database.
  @etape04 Returns the notes in a JSON response if successful.
  @etape05 Handles any errors in the middleware with appropriate messages.
 */

router.get('/', validateJWT, checkUserInData, poolNotesFromData, (req, res) => {
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

/**
  @desc Update an existing user note in the database
  @route /notes
  @method PUT
  @access private
  @etape01 Validates the JWT token to ensure user authentication.
  @etape02 Validates the request body using Joi to confirm proper input format.
  @etape03 Verifies that the user exists in the database.
  @etape04 Updates the note in the database based on the provided data.
  @etape05 Returns the updated note or a success message in the response if successful.
  @etape06 Handles any errors in the middleware with appropriate error messages.
 */

router.put('/', validateJWT, validateJoiForUpdate, checkUserInData, updateNoteInData, (req, res) => {
  res.status(200).send(req.poolNotes)
});

module.exports = router;
