const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const doc = await newProduct.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};
