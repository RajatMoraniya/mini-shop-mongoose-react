const fs = require("fs");
const model = require("../model/user");
const User = model.User;

exports.createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const doc = await newUser.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await User.findById(id);
    res.status(200).json(User);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.replaceUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndDelete({ _id: id });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};
