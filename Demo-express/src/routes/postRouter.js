const { Router} = require("express");
const postController = require("../controllers/postControllers");

const postRouter = Router();

postRouter.get("/", postController.getAllposts);

module.exports = postRouter;