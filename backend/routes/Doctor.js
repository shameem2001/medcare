const express = require("express");
const doctormodel = require("../models/Doctor");
const app = express();

app.post("/api/doctor", async (req, res)=>{
    const doctor = doctormodel(req.body);

    try{
        doctor.save().then(()=>{
            res.json("details added");
        })
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/api/doctor", async (req, res) => {
  try {
    let doctors = await doctormodel.find({});
    console.log(doctors);
    res.send(doctors);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/doctor/:id", async (req, res)=> {
    try{
        let doctor = await doctormodel.findOne({'_id': req.params.id});
        res.send(doctor);
    }
    catch(error){
        console.log(error);
    }
});

app.put("/api/doctor/:id", async (req, res) => {
  try {
    console.log(req.body);
    await doctormodel
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;