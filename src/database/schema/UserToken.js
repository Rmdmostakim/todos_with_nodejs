const mongoose = require("mongoose");
const { randomUUID } = require("crypto");
const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  token: {
    type: String,
    require: true,
  },
  expired: {
    type: Date,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = schema;
