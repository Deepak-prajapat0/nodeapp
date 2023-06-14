const Joi = require("joi");

const courseValidation = Joi.object().keys({
  name: Joi.string().min(3).max(40).required(),
  author: Joi.string().length(24).required(),
  tags: Joi.array().min(1).required(),
  price: Joi.number().min(200).max(2000).required(),
  isPublished: Joi.boolean().required(),
});

const authorValidation = Joi.object().keys({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(5).max(100).required(),
  password:Joi.string().min(6).max(50).required(),
  specialization: Joi.string().min(3).max(50).required(),
});

module.exports = { courseValidation, authorValidation };
