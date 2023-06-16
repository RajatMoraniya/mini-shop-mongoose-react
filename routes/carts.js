const express = require("express");
const routes = express.Router();
const cartsController = require('../controller/carts')

routes
  .post("/", cartsController.createCart)
  .get("/", cartsController.getAllCarts)
  .get("/:id", cartsController.getCart)
  .put("/:id", cartsController.replaceCart)
  .patch("/:id", cartsController.updateCart)
  .delete("/:id", cartsController.deleteCart);

exports.routes = routes;
