const express = require("express");
const storemodel = require("../models/Store");
const app = express();

app.post("/api/store", async (req, res)=>{
    const store = storemodel(req.body);

    try{
        store.save().then(()=>{
            res.json("details added");
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/store", async (req, res) => {
  try {
    let stores = await storemodel.find({});
    console.log(stores);
    res.send(stores);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/store/:id", async (req, res)=> {
    try{
        let store = await doctormodel.findOne({'_id': req.params.id});
        res.send(store);
    }
    catch(error){
        console.log(error);
    }
});

app.put("/api/store/:id", async (req, res) => {
  try {
    console.log(req.body);
    await doctormodel
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/store/:id", async(req, res)=>{
    await storemodel
      .findByIdAndDelete(req.params.id)
      .then((data) => res.send(data)).catch ((error)=> {
    console.log(error);
        })
})

module.exports = app;