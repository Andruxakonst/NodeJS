const express = require("express");
const userRouter = express.Router();
const User = require("../controllers/UserController");
const Auth = require("../controllers/AuthController");

//Обработка запроса login
userRouter.post('/login', Auth.login);
//Обработка запроса send
userRouter.post('/send',Auth.auth, User.send);

module.exports = userRouter;