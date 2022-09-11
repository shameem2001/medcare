const express = require("express");
const app = express();
const appointmentmodel = require("../models/Appointment");

app.post("/api/appointment", async (req, res)=>{
    console.log(req.body.mail_id);
    try{
    const appointment = appointmentmodel(req.body);
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'medcare1987@outlook.com',
        pass: 'Medcare198'
      }
    });
    
    var mailOptions = {
      from: 'medcare1987@outlook.com', 
      to: req.body.mail_id,
      subject: 'MEDCARE TOKEN BOOKING',
      text: `Token booked Succesfully`,
      html:`
      <div style="padding:10px;border-style:ridge">
      <p>Your token booking request has been successfully confirmed. </p>
      <h3>Details</h3>
      <ul>
      <li>Doctor    : ${req.body.doctor_name}</li>
        <li>Session : ${req.body.session}</li>
        <li>Time    : ${req.body.time}</li>
        <li>Date    :${req.body.date}</li>
        </ul>
        </br>
        <div style="clear: both">
        <h2 style="float: left;color:red">MED</h2>
        <h2 style="float: left;color:white">CARE</h2>
        </div>
        </br></br></br>
    <div><p sty>Thank You</p></div>
      
        
    </div>
    
      `
       
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

     appointment.save().then((data)=> {
        res.send(data._id);
        
        
    })
}
        catch(error){
            res.status(500).send(error)}
            
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
})

module.exports = app;