const Joi = require('@hapi/joi');

//Register User Validation
const registerUserValidation = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    //console.log("DEBUGGER", Joi.validate(data,schema));
    return Joi.validate(data,schema)
};

//Login Validation
const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    return Joi.validate(data,schema)
};

module.exports.registerUserValidation = registerUserValidation;
module.exports.loginValidation = loginValidation;