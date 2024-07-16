const { body } = require('express-validator');

const createUserValidationRules = () => {
    return [
        body('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Email must be valid').notEmpty().withMessage('Email is required'),
        body('phone').isMobilePhone().withMessage('Phone must be a valid mobile number').notEmpty().withMessage('Phone is required'),
        body('document').isLength({ min: 11, max: 14 }).withMessage('Document must be between 11 and 14 characters').notEmpty().withMessage('Document is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').notEmpty().withMessage('Password is required')
    ];
};

module.exports = {
    createUserValidationRules
};
