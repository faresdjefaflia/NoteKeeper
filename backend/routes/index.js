var express = require('express');
var router = express.Router();

const validateJWT = require('../middlewares/home/validateJWT');
const poolData = require('../middlewares/home/poolData');

/**
  @desc Home Page Endpoint
  @route /home
  @method GET
  @access public
  @etape01 Validates JWT token to authenticate the user. @validateJWT
  @etape02 Pools and processes the necessary data for the response. @poolData
  @etape03 Returns the processed data in the response. @returnData
 */

router.get('/', validateJWT, poolData, (req, res) => {
  res.send(req.data);
});

module.exports = router;
