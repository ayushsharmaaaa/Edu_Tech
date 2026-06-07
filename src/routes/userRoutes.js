// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { validateUserRegistration } = require('../middlewares/validate');

//  CRITICAL DIAGNOSTIC BLOCK
console.log('\n=====  ROUTER DEPENDENCY DIAGNOSTICS =====');
console.log('1. userController raw object :', userController);
console.log('2. getAllUsers function pointer:', userController?.getAllUsers);
console.log('3. createUser function pointer :', userController?.createUser);
console.log('4. validateUserRegistration   :', validateUserRegistration);
console.log('=============================================\n');

// Network Route Registration Pipelines
router.get('/', userController.getAllUsers);
router.post('/', validateUserRegistration, userController.createUser);

module.exports = router;