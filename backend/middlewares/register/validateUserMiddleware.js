// validateUserMiddleware.js
const Joi = require('joi');

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(30).required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next(); // إذا كانت البيانات صحيحة، يتم الانتقال إلى الميدلوير التالي
};

module.exports = validateUser;
