const express = require("express");
const usermodel = require("../models/User.js");
const app = express();

app.post("/api/user", async (req, res) => {
  const user = new usermodel(req.body);
  console.log(req.body.email);
  try {
    await user.save().then(() => res.json("details added"));
    var nodemailer = require("nodemailer");

    var transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "medcare1987@outlook.com",
        pass: "Medcare198",
      },
    });

    var mailOptions = {
      from: "medcare1987@outlook.com",
      to: req.body.email,
      subject: "MEDCARE Registration",
      text: `Token booked Succesfully`,
      html: `
      <div style="clear: both">
      <h2 style="float: left;color:red">MED</h2>
      <h2 style="float: left;color:white">CARE</h2>
      </div>
      <div style="padding:10px;border-style:ridge">
      </br>
       Dear ${req.body.name} ,/br>
      <p> Your Registration has been successfully confirmed. </p>
      <h5>You can now log in to your account through your Registered mail id</h5>
        </br>
       
        </br></br>
    <div><p>Thank You !</p></div>
      
        
    </div>
    
      `
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/user", async (req, res) => {
  try {
    let users = await usermodel.find({});
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/user/:id", async (req, res) => {
  try {
    let user = await usermodel.findOne({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/user/:id", async (req, res) => {
  try {
    console.log(req.body);
    await usermodel
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
