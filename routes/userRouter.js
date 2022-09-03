const express = require("express");
const userRouter = express.Router();
const User = require("../controllers/UserController");
const Auth = require("../controllers/AuthController");

userRouter.post('/login', Auth.login);
userRouter.post('/send',Auth.auth, User.send); //добавить User.send как next();

module.exports = userRouter;