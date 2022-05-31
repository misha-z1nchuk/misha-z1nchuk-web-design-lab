const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/check-auth-midlleware');
const { validateSignUp, validateLogin } = require('./validation');

router.post('/sign-up', [validateSignUp], UserController.signUp);

router.post('/login', [validateLogin], UserController.signIn);
router.get('/auth', [authMiddleware],  UserController.checkAuth);


module.exports = router;
