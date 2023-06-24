const express = require("express");
const database = require("../database");
const { environment } = require("../config");
const env = environment();
const app = express();
app.use(express.json());

const server = () => {
  app.listen(env.port, () => {
    console.log(`server started at port ${env.port}`);
  });
  database();
};
//routes
const routes = require("../routes");
app.use("/user", routes.user);
module.exports = server;
