const express = require("express");
const doctormodel = require("../../models/Doctor");
const app = express();

app.post("/api/admin/add-doctor", async (req, res)=>{
    const doctor = doctormodel(req.body);

    try{
        doctor.save().then(()=>{
            res.json("details added");
        })
    }catch(error){
        res.status(500).send(error);
    }
});

module.exports = app;