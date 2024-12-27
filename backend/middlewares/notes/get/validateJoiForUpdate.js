const Joi = require("joi");

module.exports = (req, res, next) => {
  const schema = Joi.object({
    user_id: Joi.number().required()
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message)
  };
  next();
};