var express = require("express");
var contactRouter = express.Router();
var contactModel = require("../models/contactModel");

contactRouter.post("/", async (req, res) => {
  var contact = new contactModel(req.body);
    console.log("logging the fields mapping", contact);
    res.status(200).send(contact);
});

module.exports = contactRouter;
