const mongoose = require("mongoose");
const schema = require("../../database/schema/UserToken");

const token = new mongoose.model("UserToken", schema);

module.exports = token;
