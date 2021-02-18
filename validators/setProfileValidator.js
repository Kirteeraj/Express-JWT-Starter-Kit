const Joi = require('@hapi/joi');

const profileValidation = (data) =>{
    const schema ={
        intro:Joi.string().max(100),
        place:Joi.string().max(200),
        waNumber: Joi.string().required().regex(/^[0-9]{10}$/),
        wakeUpNumber: Joi.string().regex(/^[0-9]{10}$/),
        scrrible: Joi.string()
    };
    return Joi.validate(data,schema)
};

module.exports.profileValidation = profileValidation;



