// checkUserExistsMiddleware.js
const pool = require('../../db');

const checkUserExists = async (req, res, next) => {
  const { email } = req.body;
  try {
    const verifUser = await pool.query('SELECT email FROM users WHERE email = ?', [email]);
    if (verifUser.length > 0) {
      return res.status(400).send('User already exists');
    }
    next(); // إذا لم يكن المستخدم موجودًا، يتم الانتقال إلى الميدلوير التالي
  } catch (err) {
    res.status(500).send('Error checking user existence');
  }
};

module.exports = checkUserExists;
