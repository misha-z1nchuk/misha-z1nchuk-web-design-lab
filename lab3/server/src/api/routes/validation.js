const LIVR = require('livr');

const validatePosts = (req, res, next) => {

    const validator = new LIVR.Validator({
        title: ['required', 'string', { 'max_length': 10 }],
        body: ['required', 'string',  { 'max_length': 250 }],
    });

    const validData = validator.validate(req.body);

    if (validData) {
        next();
    } else {
        res.status(404).json({ error: 'Validation error' });
    }

};



const validateSignUp = (req, res, next) => {

    const validator = new LIVR.Validator({

        firstName: ['required', 'string', { 'max_length': 10 }],
        lastName: ['required', 'string',  { 'max_length': 250 }],
        email: ['required', 'email'],
        password:  ['required', 'string',  { 'max_length': 250 }],

    });

    const validData = validator.validate(req.body);

    if (validData) {
        next();
    } else {
        res.status(404).json({ error: 'Validation error' });
    }

};



const validateLogin = (req, res, next) => {

    const validator = new LIVR.Validator({
        email: ['required', 'email'],
        password:  ['required', 'string',  { 'max_length': 250 }],
    });

    const validData = validator.validate(req.body);

    if (validData) {
        next();
    } else {
        res.status(404).json({ error: 'Validation error' });
    }

};


module.exports = {
    validatePosts,
    validateSignUp,
    validateLogin
};
