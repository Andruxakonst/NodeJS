const express = require("express");
const mainRouter = express.Router();

const UserRouter = require("../routes/userRouter");

mainRouter.use('/user', UserRouter);

module.exports = mainRouter;