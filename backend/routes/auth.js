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

router.get('/', jwt, (req, res) => {
  res.status(200).json({token: true})
});

module.exports = router;
