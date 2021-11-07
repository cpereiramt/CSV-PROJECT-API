var express = require("express");
var contactRouter = express.Router();
var contactModel = require("../models/contactModel");
const {
  verifyJWT,
  userInformationFromToken,
} = require("../middleware/tokenValidation");

contactRouter.post("/", verifyJWT, userInformationFromToken, async (req, res) => {
  var contact = new contactModel(req.body);
    console.log("logging the fields mapping", contact);
    res.status(200).send(contact);
});

module.exports = contactRouter;