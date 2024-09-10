'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/expense-controller');

const validate = require('../middlewares/validate');
const validateToken = require('../middlewares/validate-token-jwt');

const { createExpenseValidationRules } = require('../validators/ExpenseValidation/create-expense-validation');
const { updateExpenseValidationRules } = require('../validators/ExpenseValidation/update-expense-validation');

router.get('/', validateToken, controller.get);
router.get('/:id', validateToken, controller.getById);
router.post('/', createExpenseValidationRules(), validate, validateToken, controller.post);
router.put('/:id', updateExpenseValidationRules(), validate, validateToken, controller.put);
router.delete('/:id', validateToken, controller.delete);

module.exports = router;