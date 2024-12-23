const jwt = require('jsonwebtoken');
const JWT_SECRET = 'frs99';

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(400).json({message:'please you need to login'});
  } else {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({message:'please you need to login'});
      } 
      req.user = user;
      next();
    })
  }
}