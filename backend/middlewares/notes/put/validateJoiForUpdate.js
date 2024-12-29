const Joi = require("joi");

module.exports = (req, res, next) => {
  const schema = Joi.object({
    content: Joi.string().min(3).required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({message: error.details[0].message})
  }
  next();
};