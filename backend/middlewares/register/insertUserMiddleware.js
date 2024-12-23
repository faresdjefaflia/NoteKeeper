// insertUserMiddleware.js
const pool = require('../../db');

/**
  @desc Insert the new user into the database
  @route /insertUser
  @method Middleware
  @access private
  @etape01 Extracts user details (name, email, password) from the request body.
  @etape02 Inserts the user data into the database using a SQL query.
  @etape03 Sends a success message if the user is registered successfully.
  @etape04 Returns an error message if the registration fails.
 */

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
