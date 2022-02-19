const { Router } = require('express');
const signInController = require('../controllers/signInController');
const signInMiddleware = require('../middleware/isEmailValid');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);
signInRouter.post('/', signInMiddleware, signInController.signInByEmailAndPassword);

module.exports = signInRouter;