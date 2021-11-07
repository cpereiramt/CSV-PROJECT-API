var express = require("express");
var authRouter = express.Router();
const { checkUserCredentials } = require("../services/authenticationService");

authRouter.post("/login", (req, res, next) => {
  const userChecked = checkUserCredentials(req.body);
  userChecked.then((data) => {
    return res.status(data.status).json(data);
  });
});

// Logout user
authRouter.post("/logout", function (req, res) {
  res.status(200).json({ auth: false, token: null, message: "Logged out !" });
});

module.exports = authRouter;
