'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/user-controller');

const validate = require('../middlewares/validate');
const { createUserValidationRules } = require('../validators/UserValidation/create-user-validation');
const { updateUserValidationRules } = require('../validators/UserValidation/update-user-validation');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', createUserValidationRules(), validate, controller.post);
router.put('/:id', updateUserValidationRules(), validate, controller.put);
router.delete('/:id', controller.delete);

module.exports = router;