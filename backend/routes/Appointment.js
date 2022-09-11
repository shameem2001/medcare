const express = require("express");
const app = express();
const appointmentmodel = require("../models/Appointment");

app.post("/api/appointment", async (req, res)=>{
    const appointment = appointmentmodel(req.body);
    await appointment.save().then((data)=> {
        res.send(data._id)
    })
        .catch((error)=>{res.status(500).send(error)})
});

app.get("/api/appointment", async (req, res)=>{
    try{
        const appointments = await appointmentmodel.find({});
        res.send(appointments);
    }
    catch(error){
        console.log(error);
    }
});

app.get("api/appointment/:id", async (req, res) => {
    try{
        const appointment = await appointmentmodel.findOne({_id: req.params.id});
        res.send(appointment);
    }
    catch(error){
        console.log(error);
    }
})

app.put("/api/appointnment/:id", async (req, res) => {
    try{
        await appointmentmodel.findByIdAndUpdate(req.params.id, req.body).then((data)=> res.send(data));
    }
    catch(error){
        console.log(error);
    }
});

app.delete("/api/appointment/:id", async (req, res) => {
  appointmentmodel
    .findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

module.exports = app;