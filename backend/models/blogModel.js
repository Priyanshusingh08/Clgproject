const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  data: String,
  thumbnail: String,
  uploadedby: String,
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("blog", schema);

module.exports = model;
