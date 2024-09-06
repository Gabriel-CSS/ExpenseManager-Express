'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/user-controller');

const validate = require('../middlewares/validate');
const validateToken = require('../middlewares/validate-token-jwt');

const { createUserValidationRules } = require('../validators/UserValidation/create-user-validation');
const { updateUserValidationRules } = require('../validators/UserValidation/update-user-validation');
const { loginUserValidationRules } = require('../validators/UserValidation/login-user-validation');

router.get('/', validateToken, controller.get);
router.get('/:id', validateToken, controller.getById);
router.post('/', createUserValidationRules(), validate, controller.post);
router.post('/login', loginUserValidationRules(), validate, controller.login);
router.put('/:id', updateUserValidationRules(), validate, validateToken, controller.put);
router.delete('/:id', validateToken, controller.delete);

module.exports = router;