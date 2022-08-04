const express = require("express");
const usermodel = require("../../models/user/User.js");
const app = express();

app.post("/api/register", async (req, res) => {
  const user = new usermodel(req.body);
  try {
    await user.save().then(() => res.json("details added"));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/login", async (req, res) => {
  try {
    let result = await usermodel.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
