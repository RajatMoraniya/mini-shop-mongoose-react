const express = require("express");
const routes = express.Router();
const userController = require('../controller/user')

routes
  .post("/", userController.createUser)
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.routes = routes;
