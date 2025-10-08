const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("server is listening");
});

const heroFields = require("./config/heroInputs.config.js");
app.get("/", (req, res) => {
  // This spreads superName, realName, etc. as individual variables
  res.render("heroForm", heroFields);
});
