const { Router } = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isUserValid');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginMiddleware, loginController.loginByEmail);

module.exports = loginRouter;