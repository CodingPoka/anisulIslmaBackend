const Joi = require("joi");

const createProductSchema = Joi.object({
    productId: Joi.string().trim().required(),

    name: Joi.string().min(2).max(100).trim().required(),

    description: Joi.string().max(1000).trim().required(),

    price: Joi.number().min(0).required(),

    rating: Joi.number().min(0).max(5).default(0),

    stock: Joi.number().integer().min(0).required(),

    isActive: Joi.boolean().default(true),
});

module.exports = createProductSchema;