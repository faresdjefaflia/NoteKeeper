const Joi = require("joi");

/**
  @desc Validate the request body for user ID and content
  @route /validateReq
  @method Middleware
  @access private
  @etape01 Defines a Joi schema to validate `user_id` (number) and `content` (string).
  @etape02 Validates the request body against the schema.
  @etape03 If validation fails, returns a 400 error with the validation message.
  @etape04 If validation passes, proceeds to the next middleware.
 */

module.exports = (req, res, next) => {
  const schema = Joi.object({
    content: Joi.string().min(3).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({message: error.details[0].message})
  };
  next();
};