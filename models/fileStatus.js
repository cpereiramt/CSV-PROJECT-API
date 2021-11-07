const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  file_name: {
    type: String,
    required: true,
  },
  file_processed_status: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const fileModel = mongoose.model("File", fileSchema);

module.exports = fileModel;
