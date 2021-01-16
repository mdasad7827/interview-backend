const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  heading: String,
  content: String,
  url: String,
});

const formModel = mongoose.model("myform", formSchema);

module.exports = formModel;
