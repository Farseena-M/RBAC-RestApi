import Joi from 'joi';

export const userJoiSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string()
        .email()
        .required()
        .lowercase()
        .messages({
            'string.email': 'Please enter a valid Email',
            'any.required': 'Email is required'
        }),
    password: Joi.string()
        .optional()
        .messages({
            'any.required': 'Password is Required'
        }),
    role: Joi.string().valid("Admin", "Moderator", "User").default("User"),
}).unknown(true);
