var express = require("express");
var userRouter = express.Router();
var userModel = require("../models/UserModel");
userRouter.post("/", async (req, res) => {
  var user = new userModel(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = userRouter;
