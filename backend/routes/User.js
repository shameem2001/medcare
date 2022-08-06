const express = require("express");
const usermodel = require("../models/User.js");
const app = express();

app.post("/api/user", async (req, res) => {
  const user = new usermodel(req.body);
  try {
    await user.save().then(() => res.json("details added"));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/user", async (req, res) => {
  try {
    let users = await usermodel.find({});
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/user/:id", async (req, res)=>{
  try{
    let user = await usermodel.findOne({'_id': req.params.id});
    res.send(user);
  }
  catch(error){
    console.log(error);
  }
})

app.put("/api/user/:id", async (req, res)=> {
  try{
    console.log(req.body);
    await usermodel.findByIdAndUpdate(req.params.id, req.body).then((data)=> res.send(data));
  }
  catch(error){
    console.log(error);
  }
})

module.exports = app;