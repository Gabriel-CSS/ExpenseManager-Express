const { body } = require('express-validator');

const loginUserValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Email must be valid').notEmpty().withMessage('Email is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').notEmpty().withMessage('Password is required')
    ];
};

module.exports = {
    loginUserValidationRules
};
