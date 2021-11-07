const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  date_of_birth: {
    type: Date,
    default: Date.now,
    required: [true, "Date of birth is required"],
  },
  telephone: {
    type: String,
    required: [true, "Telephone is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  credit_card: {
    type: String,
    required: [true, "Credit card is required"],
  },
  franchise: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
