const Joi = require("joi");

const validateReq = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(30).required()
  });
  
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  next();
}

module.exports = validateReq;