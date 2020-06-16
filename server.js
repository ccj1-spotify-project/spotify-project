const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3000;
console.log(port);

app.listen(port, () => {
  console.log("server start");
});
