const fs = require("fs");
const model = require("../model/carts");
const Cart = model.Cart;

exports.createCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    console.log("added to cart")
    const doc = await newCart.save();
    res.status(201).send(doc);
  } catch (err) {
    console.log("failed to added to cart")
    res.status(400).send(err);
  }
};

exports.getAllCarts = async (req, res) => {
  try {
    const data = await Cart.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getCart = async (req, res) => {
  const id = req.params.id;
  try {
    const Cart = await Cart.findById(id);
    res.status(200).json(Cart);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.replaceCart = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Cart.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateCart = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Cart.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteCart = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Cart.findOneAndDelete({ _id: id });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};
