var express = require('express');
var router = express.Router();
const jwt = require('../middlewares/validateJWT');
/**
  @desc Home Page Endpoint
  @route /home
  @method GET
  @access public
  @etape01 Validates JWT token to authenticate the user. @validateJWT
  @etape02 Pools and processes the necessary data for the response. @poolData
  @etape03 Returns the processed data in the response. @returnData
 */

router.get('/', (req, res) => {
  res.status(200).json(
    {
      author: 'Fares Djefaflia',
      year: '2024',
      url: 'https://github.com/faresdjefaflia/NoteKeeper'
    }
  )
});

module.exports = router;
