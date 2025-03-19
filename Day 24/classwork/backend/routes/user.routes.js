const express = require('express');
const { signUp, login } = require('../controllers/user.controller');

userRouter = express.Router();

userRouter.post('/register', signUp);
userRouter.post('/login', login)

module.exports = {
    userRouter
};