const express = require("express");
const usermodel = require("../models/User.js");
const nodemailer = require("nodemailer");
const app = express();

app.post("/api/user", async (req, res) => {
  const user = new usermodel(req.body);
  await user
    .save()
    .then((data) => {
      res.send(data._id);
      console.log(req.body.email)
      // mailing.
      let transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: "medcare1987@outlook.com",
          pass: "Medcare198",
        },
      });

      let mailOptions = {
        from: "medcare1987@outlook.com",
        to: req.body.email,
        subject: "MEDCARE Registration",
        text: "User Registered Succesfully",
        html: `
        <div style="padding:10px;border-style:ridge">
      <h2 style="color:red">MED<span style="color:black">CARE</span></h2>
      <h3>Details</h3>
      <p>Your registration has been successfully confirmed.</p>
      <ul>
        <li>User ID    : ${data._id}</li>
        <li>User Name    : ${req.body.name}</li>
        <li>Email id   : ${req.body.email}</li>
        <li>Recovery phone number : ${req.body.phoneNumber}</li>
        </ul>
      <p>Thank You</p>
    </div>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
     // mail end.
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/user", async (req, res) => {
  try {
    let users = await usermodel.find({});
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/user/:id", async (req, res)=>{
  try{
    let user = await usermodel.findOne({'_id': req.params.id});
    res.send(user);
  }
  catch(error){
    console.log(error);
  }
})

app.put("/api/user/:id", async (req, res)=> {
  try{
    console.log(req.body);
    await usermodel.findByIdAndUpdate(req.params.id, req.body).then((data)=> res.send(data));
  }
  catch(error){
    console.log(error);
  }
});

app.delete("/api/admin/:id", async (req, res) => {
  usermodel
    .findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

module.exports = app;