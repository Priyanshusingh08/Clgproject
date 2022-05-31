const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  file: String,
  thumbnail: String,
  uploadedby: String,
  transcription: Object,
  author: { type: Date, ref: "users" },
  createdAt: Date,
});

const model = mongoose.model("videos", schema);

module.exports = model;
