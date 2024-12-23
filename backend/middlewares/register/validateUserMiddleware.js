// validateUserMiddleware.js
const Joi = require('joi');

/**
  @desc Validate the user input (name, email, password)
  @route /validateUser
  @method Middleware
  @access private
  @etape01 Defines a Joi schema to validate user input (name, email, password).
  @etape02 Validates the input against the schema.
  @etape03 If validation fails, returns a 400 error with the validation message.
  @etape04 If validation passes, proceeds to the next middleware.
 */

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
