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

module.exports = app;