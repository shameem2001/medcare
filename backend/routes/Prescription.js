const express = require("express");
const app = express();
const prescriptionmodel = require("../models/Prescription");

app.post("/api/prescription", async (req, res)=>{
    const prescription = prescriptionmodel(req.body);
    await prescription.save().then((data)=> {
        res.send(data._id)
    })
        .catch((error)=>{res.status(500).send(error)})
});

app.get("/api/prescription", async (req, res)=>{
    try{
        const prescriptions = await prescriptionmodel.find({});
        res.send(prescriptions);
    }
    catch(error){
        console.log(error);
    }
});

app.get("api/prescription/:id", async (req, res) => {
    try{
        const prescription = await prescriptionmodel.findOne({_id: req.params.id});
        res.send(prescription);
    }
    catch(error){
        console.log(error);
    }
})

app.put("/api/prescription/:id", async (req, res) => {
    try{
        await prescriptionmodel.findByIdAndUpdate(req.params.id, req.body).then((data)=> res.send(data));
    }
    catch(error){
        console.log(error);
    }
})

module.exports = app;