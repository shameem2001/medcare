const express = require("express");
const doctormodel = require("../../models/Doctor");
const app = express();

app.get("/api/doctor/doctor-details", async (req, res) => {
    try{
        let results = await doctormodel.find();
        console.log(results);
        res.send(results);
    }catch(error){
        res.send(error);
    }
})

module.exports = app;