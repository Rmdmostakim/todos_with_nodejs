const express = require("express");
const user = express.Router();
const controller = require("../app/http/controller/user");
// const appMiddleware = require("../../app/http/middleware/app");
// const userMiddleware = require("../../app/http/middleware/user");

// user routes
user.post("/store", controller.store);
user.post("/login", controller.login);
module.exports = user;
