const jwt = require("jsonwebtoken");
var userModel = require("../models/UserModel");

const checkUserCredentials = async (body) => {
  const { email, password } = body;
  const user = await userModel.findOne({ email: email });
  if (!user) {
    return {
      message: "User not found",
      status: 401,
    };
  } else if (user.password !== password) {
    return {
      message: "Password is incorrect",
      status: 401,
    };
  } else {
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "500s" });
    return { message: "user authenticated", token: token, status: 200 };
  }
};

module.exports = {
  checkUserCredentials,
};
