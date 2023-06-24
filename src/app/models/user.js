const mongoose = require("mongoose");
const schema = require("../../database/schema/user");

const user = new mongoose.model("User", schema);

module.exports = user;
