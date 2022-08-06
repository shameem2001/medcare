const express = require("express");
const usermodel = require("../../models/User.js");
const app = express();

app.get("/api/user-details", async (req, res) => {
  try {
    let result = await usermodel.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
