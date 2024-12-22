// hashPasswordMiddleware.js
const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash; // استبدال كلمة المرور الأصلية بكلمة المرور المشفرة
    next(); // الانتقال إلى الميدلوير التالي
  } catch (err) {
    res.status(500).send('Error hashing password');
  }
};

module.exports = hashPassword;
