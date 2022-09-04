const express = require("express");
const mainRouter = express.Router();

const UserRouter = require("../routes/userRouter");
//роут для энпоинта USER
mainRouter.use('/user', UserRouter);

module.exports = mainRouter;