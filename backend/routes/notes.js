var express = require('express');
var router = express.Router();

const validateJWT = require('../middlewares/home/validateJWT');
const poolData = require('../middlewares/home/poolData');


/* GET home page. */
router.get('/', validateJWT, poolData, (req, res) => {
  res.send(req.data);
});

module.exports = router;
