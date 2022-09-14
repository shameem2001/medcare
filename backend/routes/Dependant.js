const express = require("express");
const dependantmodel = require("../models/Dependant");
const app = express();

app.post("/api/dependant", async (req, res)=>{
    const dependant = dependantmodel(req.body);

    try{
        dependant.save().then(()=>{
            res.json("details added");
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/dependant", async (req, res) => {
  try {
    let dependants = await dependantmodel.find({});
    console.log(dependants);
    res.send(dependants);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/dependant/:id", async (req, res)=> {
    try{
        let dependant = await dependantmodel.findOne({'_id': req.params.id});
        res.send(dependant);
    }
    catch(error){
        console.log(error);
    }
});

app.put("/api/dependant/:id", async (req, res) => {
  try {
    console.log(req.body);
    await dependantmodel
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;