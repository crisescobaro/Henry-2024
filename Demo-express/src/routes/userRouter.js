const { Router} = require("express");
const userController = require("../controllers/userControllers");
const validateUser = require("../middlewares/validateUser");

const userRouter = Router();

userRouter.get("/", userController.getAllusers);

userRouter.post("/", validateUser, userController.createUser);

module.exports = userRouter;
