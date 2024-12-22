// insertUserMiddleware.js
const pool = require('../../db');

const insertUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    res.status(200).send(`User ${name} registered successfully!`);
  } catch (err) {
    res.status(500).send('Error during registration');
  }
};

module.exports = insertUser;
