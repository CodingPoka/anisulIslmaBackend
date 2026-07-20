const Joi = require("joi");

const authSchema = Joi.object({
  fullName: Joi.string().trim().min(2).max(100).optional(),

  email: Joi.string().trim().email().required(),

  password: Joi.string().min(6).max(20).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  authSchema, loginSchema
}