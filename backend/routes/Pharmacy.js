const express = require("express");
const pharmacymodel = require("../models/Pharmacy");
const app = express();

app.post("/api/pharmacy", async (req, res)=>{
    const pharmacy = pharmacymodel(req.body);

    try{
        pharmacy.save().then(()=>{
            res.json("details added");
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/pharmacy", async (req, res) => {
  try {
    let pharmacy = await pharmacymodel.find({});
    console.log(pharmacy);
    res.send(pharmacy);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/pharmacy/:id", async (req, res)=> {
    try{
        let pharmacy = await pharmacymodel.findOne({'_id': req.params.id});
        res.send(pharmacy);
    }
    catch(error){
        console.log(error);
    }
});

app.put("/api/pharmacy/:id", async (req, res) => {
  try {
    console.log(req.body);
    await pharmacymodel
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/pharmacy/:id", async(req, res)=>{
    await pharmacymodel
      .findByIdAndDelete(req.params.id)
      .then((data) => res.send(data)).catch ((error)=> {
    console.log(error);
        })
})

module.exports = app;