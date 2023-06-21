const express = require("express");
require("./db/mongodb");
const app = express();
const routes = require("./router/routes");

app.use(express.json());
app.use("/", routes);

module.exports = app