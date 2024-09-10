const { body } = require('express-validator');

const updateExpenseValidationRules = () => {
    return [
        body('amount').isNumeric().withMessage('Amount must be a number').notEmpty().withMessage('Amount is required').isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0.01'),
        body('description').isString().withMessage('Description must be a string').notEmpty().withMessage('Description is required'),
        body('date').isDate().withMessage('Date must be a valid date').notEmpty().withMessage('Date is required')
    ];
};

module.exports = {
    updateExpenseValidationRules
};
