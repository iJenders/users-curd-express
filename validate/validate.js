import Joi from "joi"

export const ValidateUpdateUser = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z ]*$/, 'name').min(3).max(30),
    bio: Joi.string().allow('').pattern(/^.*$/, 'bio').min(0).max(2048),
    birth: Joi.date(),
    phone: Joi.string().pattern(/^\d*$/, 'phone').min(0).max(16)
})

export const ValidateCreateUser = Joi.object({
    name: Joi.string().required().pattern(/^[a-zA-Z ]*$/, 'name').min(3).max(32),
    bio: Joi.string().required().allow('').pattern(/^.*$/, 'bio').min(0).max(2048),
    birth: Joi.date().required(),
    phone: Joi.string().required().pattern(/^\d*$/, 'phone').min(0).max(16)
})

