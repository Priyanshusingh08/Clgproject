const mongoose = require("../connection");

const schema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  age: Number,
  name: String,
  thumbnail: String,
  isAdmin: { type: Boolean, default: false },
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
