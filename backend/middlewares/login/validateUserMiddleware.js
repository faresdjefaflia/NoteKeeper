const Joi = require("joi");

/**
  @desc Validate the request body for login credentials (email, password)
  @route /validateReq
  @method Middleware
  @access private
  @etape01 Defines a Joi schema to validate email and password.
  @etape02 Validates the request body against the schema.
  @etape03 If validation fails, returns a 400 error with the validation message.
  @etape04 If validation passes, proceeds to the next middleware.
 */

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