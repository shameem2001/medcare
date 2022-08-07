const express = require("express");
const app = express();
const adminmodel = require("../models/Admin");

app.get("/api/admin", async (req, res)=>{
    try{
        let admins = await adminmodel.find({});
        res.send(admins);
    }
    catch(error){
        console.log(error);
    }
});

module.exports = app;