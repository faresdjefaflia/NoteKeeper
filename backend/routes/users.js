var express = require('express');
var router = express.Router();

const pool = require('../db');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('error');
  }
});

router.get('/:id', async(req,res) => {
  try {
    const user = await pool.query('SELECT name FROM users WHERE id =?', [req.params.id]);
    res.status(200).json(user);
  }
  catch (err) {
    res.status(500).send('error');
  }
})
module.exports = router;
